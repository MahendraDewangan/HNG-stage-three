import React from 'react';
import './Header.css'
import { useState } from 'react';

export const Header = () => {
    
    state = { text: '' };
    onFormSubmit = (event) => {
      event.preventDefault();
      this.props.submit(this.state.text);
    };

    return (
        <>

            <header >
                <div className="container flexSB">
                    <nav className='flexSB navbar'>
                        <div className="logo">
                            <a href="/"><img src="./images/logo-rm.png" alt="" className="header_logo" /></a>

                        </div>
                        <div className="search-bar">
                            <form onSubmit={this.onFormSubmit} className='ui form'>
                                <div className='field'>
                                    <label>Search</label>
                                    <input
                                        type='text'
                                        value={this.state.text}
                                        onChange={(event) => this.setState({ text: event.target.value })}
                                    />
                                </div>
                            </form>
                            <input type="text" placeholder='Search' />
                            <i className="fa fa-search search-magnifying-glass" ></i>

                        </div>
                        <div className='flexSB menu'>
                            <div className="menu-btn">
                                <a href="/"><i class="fa fa-user"></i></a>
                            </div>
                            <div className="menu-btn">
                                <a href="/"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
        </>
    )
}
