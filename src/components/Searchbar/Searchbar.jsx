import { Component } from 'react';
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

export class SearchBar extends Component {
  state = { searchWord: '' };

  handleInput = evt => {
    this.setState({ searchWord: evt.currentTarget.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const searchItem = this.state.searchWord.toLowerCase().trim();
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
    this.props.onSubmit(searchItem);
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FiSearch size={25} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            value={this.state.searchWord}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </SearchForm>
        <ToastContainer />
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
