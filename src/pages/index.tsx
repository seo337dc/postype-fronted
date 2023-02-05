import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import PhotoList from '@Components/PhotoList';
import Error from '@Components/Error';

import { userAtom } from '@Atom';
import { getInitSearch } from '@Controller/index';

import type { NextPage } from 'next';
import type { AxiosResponse } from 'axios';
import type { TLoginDto, TUser, TUserDto } from '@Type/user';
import type { TPhoto } from '@Type/photo';

import Loading from '@Components/Loading';

const cookies = new Cookies();

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

  const router = useRouter();
  const { page } = router.query;
  const userInfo = cookies.get('user') as TLoginDto | null | undefined;

  const [nowPage, setNowPage] = useState<number>(Number(page) || 1);

  const [user, setUser] = useRecoilState<TUser | null>(userAtom);

  const [keyword, setKeyword] = useState('');
  const [photoList, setPhotList] = useState<TPhoto[]>([]);

  useQuery(['getInitSearch'], () => getInitSearch(), {
    onSuccess: (res: AxiosResponse<TPhoto[]>) => {
      if (res.status === 200) {
        setPhotList(res.data);
      }
    },
  });

  console.log(photoList);

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

        <CusInput size='large' placeholder='large size' prefix={<SearchOutlined />} />
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

const CusInput = styled(Input)`
  height: 40px;
  border: 1px solid #fff;
  border-radius: 24px;
  background-color: #eee;

  input {
    background-color: #eee !important;
  }
`;
