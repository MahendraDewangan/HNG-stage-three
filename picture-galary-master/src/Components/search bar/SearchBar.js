import React, { useState } from 'react';
import './SearchBar.css';
import { useAuth0 } from "@auth0/auth0-react";

function SearchBar(props) {
  const [text, setText] = useState('');

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.submit(text);
  };

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className='flexSB navbar'>
            <div className="logo">
              <a href="/"><img src="./images/logo-rm.png" alt="" className="header_logo" /></a>
            </div>
            <div className="search-bar">
              <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                  {/* <label>Search</label> */}
                  <input
                    type='text'
                    value={text}
                    placeholder='Search here'
                    onChange={(event) => setText(event.target.value)}
                  />
                </div>
              </form>
              {/* <input type="text" placeholder='Search' /> */}
              {/* <i className="fa fa-search search-magnifying-glass" ></i> */}
            </div>
            <div className='flexSB menu'>
              <div className="menu-btn">
                <div className="logInOut">
                  {/* <a href="/"><i className="fa fa-user"></i></a> */}
                  {
                    isAuthenticated ? (
                      <div className="loggedOut">
                        <div className="dropdown">
                          <button className="dropbtn"><i className="fa fa-user"></i></button>
                          <div className="dropdown-content">
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

              
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default SearchBar;
