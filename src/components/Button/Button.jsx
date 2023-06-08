import PropTypes from 'prop-types';

//кнопка для загрузки сторінок
export const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        Load More
      </button>
    </>
  );
};

Button.ptopTypes = {
  onClick: PropTypes.func.isRequired,
};
