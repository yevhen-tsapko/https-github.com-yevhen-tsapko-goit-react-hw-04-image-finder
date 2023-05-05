import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleInput = evt => {
    setSearchWord(evt.currentTarget.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const searchItem = searchWord.toLowerCase().trim();
    if (searchItem === '') {
      toast.warning('Enter something, please', {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        progress: 0,
        pauseOnFocusLoss: 'false',
      });
      return;
    }
    onSubmit(searchItem);
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FiSearch size={25} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          value={searchWord}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </SearchForm>
      <ToastContainer />
    </Searchbar>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
