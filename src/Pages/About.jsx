import React, { useState } from 'react';
import Modal from 'react-modal';
// import './css/About.css'


export default function About() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modal-window">
            <button className="about-button" onClick={() => setModalIsOpen(true)}>About</button>
            <Modal isOpen = {modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}>

                <h2>WEB 3 Assignment 2 by Andre Co Liam Cormwall, Meet Suthar</h2>
                <p className="modal-content">
                    <ul> Group Members
                        <li>Andre Co Liam Cormwall, Meet Suthar</li>
                    </ul>
                    <ul> 
                        <li><a href="https://github.com/AndreCo17/WEB-3-Assignment-1">Github Link</a></li>
                    </ul>
                    <ul> Technology Used
                        <li>REACT</li>
                        <li>Google</li>
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
                    <p>I really tried my best with the given time. I would appreciate some feedback on this assignment. Given that I was working alone, I struggled to finish everything in time. There are functions and lines of code in my project that I left so that you may able to take a look and possibly provide some feedback. Thanks Randy!</p>
                </p>
                <div>
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
