import styled from 'styled-components';

import PhotoItem from './PhotoItem';

import type { TPhoto } from '@Type/photo';

type TProps = {
  photoList: TPhoto[];
};

const PhotoList = ({ photoList }: TProps) => (
  <Container>
    {photoList.map((photo) => (
      <PhotoItem key={photo.id} photo={photo} />
    ))}
  </Container>
);

export default PhotoList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;
