import { Item } from './Item/Item';
import { ImageList } from './ImageGalleryItems.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItems = ({ galleryItems, getLargeImage }) => {
  return (
    <ImageList>
      {galleryItems.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <Item
            onClick={() => getLargeImage(largeImageURL, tags)}
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            id={id}
            tags={tags}
            getLargeImage={getLargeImage}
          />
        );
      })}
    </ImageList>
  );
};
ImageGalleryItems.propTypes = {
  galleryItems: PropTypes.array.isRequired,
  getLargeImage: PropTypes.func.isRequired,
};
