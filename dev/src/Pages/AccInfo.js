import React, { useState } from 'react';
import Modal from 'react-modal';

export default function AccInfo() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modal-window2">
            <div className="acc-button" onClick={() => setModalIsOpen(true)}>Account Info</div>
            <Modal isOpen = {modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}>

                nothing yet
                <div align="center">
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
