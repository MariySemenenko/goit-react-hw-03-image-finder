import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Div, Large } from '../Styled.imafeFinder';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  //монтування компонента додю слухача keydown і викликаю onClose()
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  //розмонтування компонента видаляю слухач подій
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  //перевіряю чи натиснута клавіша Escape
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClouse();
    }
  };
  //перевіряю чи було клікнуте модальне вікно зовні (через createPortal)
  handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClouse();
    }
  };

  render() {
    const { largeImage, tags } = this.props;

    return createPortal(
      //відображаю модальне вікно
      <Div onClick={this.handleBackdropClose}>
        <Large>
          <img src={largeImage} alt={tags} />
        </Large>
      </Div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClouse: PropTypes.func.isRequired,
};
