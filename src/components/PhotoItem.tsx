/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { TPhoto } from '@Type/photo';

type TProps = {
  photo: TPhoto;
  hover: TPhoto | null;
  setHover: Dispatch<SetStateAction<TPhoto | null>>;
};

const PhotoItem = ({ photo, hover, setHover }: TProps) => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  return (
    <Wrap isPc={isPc}>
      <Thumbnail onMouseEnter={() => setHover(photo)} onMouseLeave={() => setHover(null)}>
        <img src={photo.urls.thumb ? photo.urls.thumb : '/defaultThumbnailPC.jpg'}></img>
        {hover === photo && (
          <HoverWrap>
            <UserProfile>
              <img
                src={
                  hover.user.profile_image.large
                    ? hover.user.profile_image.large
                    : '/defaultThumbnailPC.jpg'
                }
              />
            </UserProfile>
            <UserName>{hover.user.name}</UserName>
          </HoverWrap>
        )}
      </Thumbnail>
    </Wrap>
  );
};

export default PhotoItem;

const Wrap = styled.a<{ isPc: boolean }>`
  width: ${({ isPc }) => (isPc ? 'calc(100% / 3.2)' : '100%')};
  height: 200px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 200px;
  }
`;

const HoverWrap = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8); /*까만색(0,0,0) 80% 불투명도*/
  transform: translate(0%, -100%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserProfile = styled.div`
  width: 200px;
  height: 120px;

  img {
    width: 200px;
    height: 120px;
  }
`;

const UserName = styled.div`
  width: 100px;
  height: 50px;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
