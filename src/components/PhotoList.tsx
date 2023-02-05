import styled from 'styled-components';

import PhotoItem from './PhotoItem';

import type { TPhoto } from '@Type/photo';

type TProps = {
  photoList: TPhoto[];
};

const PhotoList = ({ photoList }: TProps) => (
  <Container>
    {photoList.map((photo, idx) => (
      <PhotoItem key={`${photo.id}_${idx}`} photo={photo} />
    ))}
  </Container>
);

export default PhotoList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;
