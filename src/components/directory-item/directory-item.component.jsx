import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(route);
  }

  return (
    <DirectoryItemContainer onClick={handleRoute}>
      <BackgroundImage imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
