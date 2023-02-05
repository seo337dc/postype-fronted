import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { TPhoto } from '@Type/photo';

type TProps = {
  photo: TPhoto;
};

const PhotoItem = ({ photo }: TProps) => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  return (
    <Wrap isPc={isPc}>
      <Thumbnail src={photo.urls.thumb ? photo.urls.thumb : '/defaultThumbnailPC.jpg'} />
    </Wrap>
  );
};

export default PhotoItem;

const Wrap = styled.a<{ isPc: boolean }>`
  width: ${({ isPc }) => (isPc ? 'calc(100% / 3.2)' : '100%')};
  height: 200px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
