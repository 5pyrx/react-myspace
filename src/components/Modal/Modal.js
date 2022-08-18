import React from 'react';
import style from './Modal.module.css';

function Modal({ closeModal }) {
    return (
      <div className={style.Modal}>
        <div className={style.modalContainer}>
            <p>here will be my CV</p>
            <div className={style.closeButton}>
                <button onClick={() => closeModal(false)}>
                    Close Modal
                </button>
            </div>
        </div>
      </div>
    );
  }

export default Modal;
