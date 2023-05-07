import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { AppBlock } from './App.styled';
import { Button } from './Button/Button';
import { useEffect, useState } from 'react';
import { ImageGalleryItems } from 'components/ImageGalleryItems/ImageGalleryItems';
import { Loader } from './Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchPage } from 'servise/fetchPage';

export const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState('');
  const [visibleLoader, setVisibleLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const fetchItems = async (page, searchItem) => {
      const { data } = await fetchPage(page, searchItem).catch(err => {
        toast.error(`Somthing went wrong :  ${err.message}`);
      });
      if (!data.hits.length) {
        toast.error('Nothing was found for your request', {
          position: 'top-center',
          autoClose: 3000,
          closeOnClick: true,
          progress: 0,
          pauseOnFocusLoss: 'false',
        });
      }
      setGalleryItems([...galleryItems, ...data.hits]);
      handleScroll(page);
    };
    if (searchItem) {
      setVisibleLoader(true);
      fetchItems(page, searchItem);
      setVisibleLoader(false);
    }
  }, [searchItem, page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const getLargeImage = (largeImageURL, tags) => {
    toggleModal();
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };

  const toggleModal = () => setShowModal(showModal => !showModal);

  const getSearchItem = newSearchItem => {
    if (newSearchItem !== searchItem) {
      setPage(1);
      setGalleryItems([]);
      setSearchItem(newSearchItem);
    }
  };

  const handleScroll = page => {
    if (page > 1) {
      window.scrollBy({
        top: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBlock>
      <SearchBar onSubmit={getSearchItem} />
      {visibleLoader && <Loader />}
      {galleryItems.length !== 0 && (
        <>
          <ImageGalleryItems
            galleryItems={galleryItems}
            getLargeImage={getLargeImage}
          />
          <Button loadMore={loadMore} />
        </>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {showModal && (
        <Modal largeImage={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </AppBlock>
  );
};
