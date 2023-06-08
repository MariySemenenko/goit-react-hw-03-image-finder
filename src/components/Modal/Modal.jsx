import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import s from './Modal.module.css'
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
//монтування компонента додю слухача keydown і викликаю onClose()
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
//розмонтування компонента видаляю слухач подій
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
//перевіряю чи натиснута клавіша Escape
    handleKeyDown = e => {
        if(e.code === 'Escape') {
            this.props.onClouse();
        }
    }
//перевіряю чи було клікнуте модальне вікно зовні (через createPortal)
    handleBackdropClose = e => {
        if( e.currentTarget === e.target ) {
            this.props.onClouse();
        }
    }

    render() {
        const {largeImage, tags} = this.props
        console.log(this.props)
        return createPortal(//відображаю модальне вікно
            <div className={s.Overlay} onClick={this.handleBackdropClose}>
                <div className={s.Modal}>
                    <img src={largeImage} alt={tags}/>
                </div>
            </div>,
            modalRoot
        )
    }
}

Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClouse: PropTypes.func.isRequired,
}