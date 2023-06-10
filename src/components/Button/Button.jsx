import PropTypes from 'prop-types';
import { Loed } from 'components/Styled.imafeFinder';

//кнопка для загрузки сторінок
export const Button = ({ onClick }) => {
  return (
    <>
      <Loed type="button" onClick={onClick}>
        Load More
      </Loed>
    </>
  );
};

Button.ptopTypes = {
  onClick: PropTypes.func.isRequired,
};
