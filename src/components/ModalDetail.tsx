import { useMemo } from 'react';
import { TPhotoDetail } from '@Type/photo';
import styled from 'styled-components';

import { CameraOutlined, CalendarOutlined } from '@ant-design/icons';

import { timeForToday } from '@Util';

type TProps = {
  photoInfo: TPhotoDetail;
};

const ModalDetail = ({ photoInfo }: TProps) => {
  /**
   * 관련 사진
   * - related_collections가 맞는 것인지, api를 다른 것을 호출해서 그런 것인지
   * - 데이터는 노출이 되고 있으나 관련 이미지가 맞는지 확인이 되지 않습니다.
   */
  const relatedPhotoList = useMemo(() => {
    const previewList = photoInfo.related_collections.results.map((data) => data.preview_photos);
    const previewRelatedList = previewList.reduce(function (acc, cur) {
      return acc.concat(cur);
    });
    return previewRelatedList;
  }, [photoInfo.related_collections.results]);

  return (
    <div>
      <Img img={photoInfo.urls.regular} />
      <ImageInfo>
        <div className='content'>
          <p className='title'>조회 수</p>
          <p>{photoInfo.views ? photoInfo.views : '--'}</p>
        </div>

        <div className='content'>
          <p className='title'>다운로드</p>
          <p>{photoInfo.downloads ? photoInfo.downloads : '--'}</p>
        </div>

        <div className='content'>
          <p className='title'>소개 매체</p>
          <p>보도/편집 전용</p>
        </div>
      </ImageInfo>

      <CameraInfo>
        <div className='content'>
          <CalendarOutlined className='icon' />
          <span>{photoInfo.created_at && `${timeForToday(photoInfo.created_at)}에 계시됨`}</span>
        </div>

        <div className='content'>
          <CameraOutlined className='icon' />
          <span>{photoInfo.exif.name}</span>
        </div>
      </CameraInfo>

      <RelatedPhtoContainer>
        {relatedPhotoList.map((data, idx) => (
          <RelatedPhto key={`${data.id}_${idx}`} img={data.urls.small} />
        ))}
      </RelatedPhtoContainer>
    </div>
  );
};

export default ModalDetail;

const Img = styled.div<{ img: string }>`
  height: 80vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
`;

const ImageInfo = styled.div`
  display: flex;
  align-items: center;

  @media all and (min-width: 768px) {
    gap: 150px;
  }

  @media (max-width: 767px) {
    gap: 50px;
  }

  .content .title {
    color: #767676;
    font-size: 14px;
    width: fit-content;
  }
`;

const CameraInfo = styled.div`
  margin-top: 25px;

  .content {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #767676;
  }
`;

const RelatedPhtoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const RelatedPhto = styled.div<{ img: string }>`
  width: 200px;
  height: 200px;
  background-image: url(${({ img }) => img});
`;
