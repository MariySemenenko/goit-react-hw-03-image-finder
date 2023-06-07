
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if(e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClose = e => {
        if(e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const {largeImage, tags} = this.props
        return createPortal(
            <overlay onClick={this.handleBackdropClose}>
                <div>
                    <img src={largeImage} alt={tags}/>
                </div>
            </overlay>,
            modalRoot
        )
    }
}