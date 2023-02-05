import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { throttle } from 'lodash';

import PhotoList from '@Components/PhotoList';
import Error from '@Components/Error';

import { getInitSearch, getSearch } from '@Controller/index';

import type { NextPage } from 'next';
import type { AxiosResponse } from 'axios';

import type { TPhoto, TSearchPhoto } from '@Type/photo';

import Loading from '@Components/Loading';

import { useMediaQuery } from 'react-responsive';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const HomePage: NextPage = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const nextPageRef = useRef(1);
  const isSearch = useRef(false);

  const [keyword, setKeyword] = useState('');
  const [photoList, setPhotList] = useState<TPhoto[]>([]);

  const { refetch: initSearchRefech, isLoading: loadingInit } = useQuery(
    ['getInitSearch'],
    () => getInitSearch(nextPageRef.current),
    {
      onSuccess: (res: AxiosResponse<TPhoto[]>) => {
        if (res.status === 200) {
          if (nextPageRef.current > 1) {
            setPhotList(photoList.concat(res.data));
          }

          if (nextPageRef.current === 1) {
            setPhotList(res.data);
          }

          // 현재 위치를 기준으로 가로200px, 세로300px 스크롤 이동
          if (nextPageRef.current > 1) window.scrollBy(0, 10);
          nextPageRef.current++;
        }
      },
    }
  );

  const { refetch: searchRefetch, isLoading: loadingSearch } = useQuery(
    ['getSearch'],
    () => getSearch(keyword),
    {
      onSuccess: (res: AxiosResponse<TSearchPhoto>) => {
        if (res.status === 200) {
          if (nextPageRef.current > 1) {
            setPhotList(photoList.concat(res.data.results));
          }

          if (nextPageRef.current === 1) {
            setPhotList(res.data.results);
          }

          // 현재 위치를 기준으로 가로200px, 세로300px 스크롤 이동
          if (nextPageRef.current > 1) window.scrollBy(0, 10);
          nextPageRef.current++;
        }
      },
    }
  );

  const onSearch = () => {
    nextPageRef.current = 1;
    if (keyword) {
      isSearch.current = true;
      searchRefetch();
    } else {
      isSearch.current = false;
      initSearchRefech();
    }
  };

  const handleScroll = throttle(() => {
    if (loadingSearch || loadingInit) return;

    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop = document.documentElement && document.documentElement.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {
      if (isSearch.current) {
        searchRefetch();
      } else {
        initSearchRefech();
      }
    }
  }, 300);

  useEffect(() => {
    if (loadingSearch || loadingInit) return;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingSearch, loadingInit]);

  useEffect(() => {
    initSearchRefech();
  }, []);

  return (
    <>
      <Header>
        <nav>
          <a className='XDKcL eziW_' title='홈 — Unsplash' href='/ko'>
            <svg
              width='32'
              height='32'
              className='UP8CN'
              viewBox='0 0 32 32'
              version='1.1'
              aria-labelledby='unsplash-홈'
              aria-hidden='false'
            >
              <desc lang='en-US'>Unsplash logo</desc>
              <title id='unsplash-홈'>Unsplash 홈</title>
              <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z'></path>
            </svg>
          </a>
        </nav>

        <CusInput
          size='large'
          prefix={<SearchOutlined />}
          placeholder='레포지토리를 검색하세요.'
          value={keyword}
          enterButton
          onSearch={onSearch}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Header>
      <Container>
        <PhotoList photoList={photoList} />
      </Container>
    </>
  );
};

export default HomePage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;

const CusInput = styled(Input.Search)`
  height: 40px;
  border: 1px solid #fff;
  border-radius: 24px;
  background-color: #eee;

  input {
    background-color: #eee !important;
  }
`;
