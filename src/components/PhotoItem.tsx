/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, Dispatch, SetStateAction } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { Modal, Spin } from 'antd';
import { SettingOutlined, CloseCircleOutlined } from '@ant-design/icons';

import ModalTitle from '@Components/ModalTItle';
import ModalDetail from '@Components/ModalDetail';

import type { TPhoto, TPhotoDetail } from '@Type/photo';
import { getPhotoInfo } from '@Controller/index';

type TProps = {
  photo: TPhoto;
  hover: TPhoto | null;
  setHover: Dispatch<SetStateAction<TPhoto | null>>;
  isPc: boolean;
};

const PhotoItem = ({ photo, hover, setHover, isPc }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoId, setPhotoId] = useState('');

  const handleOpenNewTab = (data: TPhoto) => {
    window.open(data.user.links.html, '_blank', 'noopener, noreferrer');
  };

  const onClickMobile = (data: TPhoto) => {
    if (isPc) return;
    if (data === hover) return;
    setHover(data);
  };

  const handleOpenModal = (id: string) => {
    setPhotoId(id);
    setIsModalOpen(true);
  };

  const handleCancelModal = () => {
    setPhotoId('');
    setIsModalOpen(false);
  };

  const { data, isFetching } = useQuery<TPhotoDetail>(
    ['getPhotoInfo', photoId],
    () => getPhotoInfo(photoId),
    {
      enabled: !!photoId,
    }
  );

  if (data) console.log(data);

  return (
    <Wrap>
      <Thumbnail
        onClick={() => !isPc && onClickMobile(photo)}
        onMouseEnter={() => isPc && setHover(photo)}
        onMouseLeave={() => isPc && setHover(null)}
      >
        <img src={photo.urls.thumb ? photo.urls.thumb : '/defaultThumbnailPC.jpg'}></img>
        {hover === photo && (
          <HoverWrap>
            <SettingWrap>
              <CustomSettingIcon onClick={() => handleOpenModal(photo.id)} />
              {!isPc && <CustomCloseIcon onClick={() => setHover(null)} />}
            </SettingWrap>

            <UserWrap onClick={() => handleOpenNewTab(hover)}>
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
            </UserWrap>
          </HoverWrap>
        )}
      </Thumbnail>

      <Spin spinning={isFetching}>
        <Modal
          title={<ModalTitle photoInfo={data || null} />}
          open={isModalOpen}
          onOk={handleCancelModal}
          onCancel={handleCancelModal}
          width={1000}
        >
          {data && <ModalDetail photoInfo={data} />}
        </Modal>
      </Spin>
    </Wrap>
  );
};

export default PhotoItem;

const Wrap = styled.a`
  height: 200px;

  @media all and (min-width: 768px) {
    width: calc(100% / 3.2);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
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

const UserWrap = styled.div`
  cursor: pointer;
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
  width: 100%;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const SettingWrap = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const CustomSettingIcon = styled(SettingOutlined)`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const CustomCloseIcon = styled(CloseCircleOutlined)`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
