import styled from 'styled-components';

import { TPhoto } from '@Type/photo';

type TProps = {
  photo: TPhoto;
};

const PhotoItem = ({ photo }: TProps) => {
  return (
    <Container>
      <Thumbnail src={photo.urls.thumb ? photo.urls.thumb : '/defaultThumbnail.jpg'} />
    </Container>
  );
};

export default PhotoItem;

const Container = styled.a`
  width: calc(100% / 4);
  height: 180px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
