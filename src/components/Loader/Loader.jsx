import { FallingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <FallingLines
        color="#4fa94d"
        width="200"
        ariaLabel="falling-lines-loading"
      />
    </LoaderContainer>
  );
};
