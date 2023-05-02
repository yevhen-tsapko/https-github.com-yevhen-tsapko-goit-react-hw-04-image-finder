import { GalleryItem, Image } from './Item.styled';
import PropTypes from 'prop-types';
export const Item = ({
  webformatURL,
  largeImageURL,
  id,
  tags,
  getLargeImage,
}) => {
  return (
    <GalleryItem key={id}>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => getLargeImage(largeImageURL, tags)}
      />
    </GalleryItem>
  );
};
Item.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
};
