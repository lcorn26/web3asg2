import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function AccInfo() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [user, setUser] = useState();

    useEffect(() => {
        if (!user) {
          const curUrl = "/loggedInUser";
          fetch(curUrl)
            .then((resp) => resp.json())
            .then((loggedInUser) => {
              const url = "/api/user/" + loggedInUser[0].id;
              fetch(url)
                .then((resp) => resp.json())
                .then((data) => {
                  setUser(data[0]);
                });
            });
        }
      }, []);
    const renderProfile = () => {
        if (user) {
          return (
            <div>{profile()}</div>
          )}}
    const profile = () => {
        if (user) {
          return (
            <div className="profile">
              <div>
                <h1>{user.details.firstname} {user.details.lastname}</h1>
                <p>{user.details.city}, {user.details.country}</p>
                <p>Email: {user.email}</p>
                <p>Date joined: {user.membership.date_joined}</p>
                <p>Likes: {user.membership.likes}</p>
              </div>
              <div><img className="pplarge" src={user.picture.large} /></div>
              <div>
              </div>
            </div>
          );}};

    return (
        <div className="modal-window2">
            <div className="acc-button" onClick={() => setModalIsOpen(true)}>Account Info</div>
            <Modal isOpen = {modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}>
                    {renderProfile()} 
                <div align="center">
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
