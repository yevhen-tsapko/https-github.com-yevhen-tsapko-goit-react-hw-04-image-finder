import { FallingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
export const Loader = ({ value }) => {
  return (
    <LoaderContainer>
      <FallingLines
        color="#4fa94d"
        width="200"
        visible={value}
        ariaLabel="falling-lines-loading"
      />
    </LoaderContainer>
  );
};
