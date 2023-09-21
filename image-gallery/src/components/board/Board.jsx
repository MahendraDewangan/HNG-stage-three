import React, { useState } from 'react';
import './Board.css';
import { Modal } from '../modal/Modal';
import { Pins } from '../pin/Pins';
import { useAuth0 } from "@auth0/auth0-react";

const Board = () => {
    const [pins, setPins] = useState([]);
    const [showModel, setShowModel] = useState(false);

    const addPin = (pinDetails) => {
        setPins(prevPins => [
            ...prevPins,
            <Pins pinDetails={pinDetails} key={prevPins.length} />
        ]);
        setShowModel(false);
    };

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <>
            <header>
                <div className="container flexSB">
                    <nav className='flexSB navbar'>
                        <div className="logo">
                            <a href="/"><img src="./images/logo-rm.png" alt="" className="header_logo" /></a>
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder='Search' />
                            <i className="fa fa-search search-magnifying-glass" ></i>
                        </div>
                        <div className='flexSB menu'>
                            <div className="menu-btn">
                                <div className="logInOut">
                                    {/* <a href="/"><i className="fa fa-user"></i></a> */}
                                    {
                                        isAuthenticated ? (
                                            <div className="loggedOut">
                                                <div class="dropdown">
                                                    <button class="dropbtn"><i className="fa fa-user"></i></button>
                                                    <div class="dropdown-content">
                                                        <div className="userDetails" >
                                                            {isAuthenticated && <p>{user.name}</p>}
                                                        </div>
                                                        
                                                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="loggedIn">
                                                <button onClick={() => loginWithRedirect()}>Log in</button>
                                            </div>
                                        )

                                    }
                                </div>
                            </div>

                            <div onClick={() => setShowModel(true)} className="menu-btn">
                                <i className="fa fa-plus"></i>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="pin_container">
                {pins}
            </div>
            <div onClick={event => event.target.className === 'add_pin_modal' ? setShowModel(false) : null} className="add_pin_modal_container">
                {
                    showModel ? <Modal add_pin={addPin} /> : null
                }
            </div>
        </>
    );
};

export default Board;
