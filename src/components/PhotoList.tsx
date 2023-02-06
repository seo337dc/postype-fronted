import { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import PhotoItem from '@Components/PhotoItem';

import type { TPhoto } from '@Type/photo';

type TProps = {
  photoList: TPhoto[];
};

const PhotoList = ({ photoList }: TProps) => {
  const [hover, setHover] = useState<TPhoto | null>(null);

  const isPc = useMediaQuery({
    query: 'all and (min-width: 768px)',
  });

  return (
    <Container>
      {photoList.map((photo, idx) => (
        <PhotoItem
          key={`${photo.id}_${idx}`}
          photo={photo}
          hover={hover}
          setHover={setHover}
          isPc={isPc}
        />
      ))}
    </Container>
  );
};

export default PhotoList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;
