import styled from 'styled-components';

import { CheckCircleOutlined } from '@ant-design/icons';

import { TPhotoDetail } from '@Type/photo';

type TProps = {
  photoInfo: TPhotoDetail | null;
};

const ModalTitle = ({ photoInfo }: TProps) => {
  if (!photoInfo) return <div />;

  return (
    <Wrap>
      <SmallProfileImg img={photoInfo.user.profile_image.small} />
      <ProfileInfo>
        <p>{photoInfo.user.name}</p>
        <div className='accepted'>
          {photoInfo.user.accepted_tos ? (
            <span>
              고용 가능 <CheckCircleOutlined />
            </span>
          ) : (
            <span>{photoInfo.user.username}</span>
          )}
        </div>
      </ProfileInfo>
    </Wrap>
  );
};

export default ModalTitle;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SmallProfileImg = styled.div<{ img: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${({ img }) => img});
`;

const ProfileInfo = styled.div`
  font-size: 12px;

  .accepted {
    font-size: 10px;
    color: blue;
  }
`;
