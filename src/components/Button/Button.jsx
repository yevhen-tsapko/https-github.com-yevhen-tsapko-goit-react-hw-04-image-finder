import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';
export const Button = ({ loadMore }) => {
  return (
    <div>
      <LoadMoreButton type="button" onClick={loadMore}>
        Load more
      </LoadMoreButton>
    </div>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
