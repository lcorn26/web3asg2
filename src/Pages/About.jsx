import React, { useState } from 'react';
import Modal from 'react-modal';


export default function About() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modal-window">
            <div className="about-button" onClick={() => setModalIsOpen(true)}>About</div>
            <Modal isOpen = {modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}>

                <h2 align="center">WEB 3 Assignment 2 | <a href="https://github.com/lcorn26/web3asg2">Github Link</a></h2>
                <p className="modal-content">
                    <p align="center">Group Members: Andre Co, Liam Cormwall, Meet Suthar</p>
                    <p align="center">React UI: Ant Design</p>
                </p>
                <hr></hr>
                <hr></hr>
                <div align="center">
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
