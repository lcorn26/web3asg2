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

                <h2>WEB 3 Assignment 2 by Andre Co Liam Cormwall, Meet Suthar</h2>
                <p className="modal-content">
                    <ul> Group Members
                        <li>Andre Co Liam, Cormwall, Meet Suthar</li>
                    </ul>
                    <ul> 
                        <li><a href="https://github.com/lcorn26/web3asg2">Github Link</a></li>
                    </ul>
                    <ul> Technology Used
                        <li>REACT</li>
                        <li>Ant Design Library</li>
                        <li>VS Code</li>
                        <li>JSX</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>React-dom</li>
                        <li>React-dom-router</li>
                        <li>React-modal</li>
                    </ul>
                    <ul>Sources Used:
                        <ul>YouTube
                            <li><a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">React JS Crash Course 2021</a></li>
                            <li><a href="https://www.youtube.com/watch?v=mZvKPtH9Fzo">Search Filter React Tutorial - Search Bar in React
</a></li>
                        </ul>
                        
                    </ul>

                    <h4>Functionality that is missing from the app are:</h4>
                    <ul>
                        ----
                    </ul>
                </p>
                <div>
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
