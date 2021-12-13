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

                <h1 align="center">WEB 3 Assignment 2 | <a href="https://github.com/lcorn26/web3asg2">Github Link</a></h1>
                <h2 align="center"> <p className="modal-content">
                    <p >Website made by: Andre Co, Liam Cormwall, Meet Suthar</p>
                    <p >React UI: Ant Design</p>
                </p>
                </h2>
                <hr></hr>
                <p align="center" > 
                    <h3>Resources Used: </h3>
                    <li>React Library</li>
                    <li></li>
                </p>
                <hr></hr>
                <p align="center">
                    <h2>API Links</h2>
                    <li>hi</li>
                    <li></li>
                    </p>
                    <hr></hr>
                <div align="center">
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
