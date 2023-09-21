import React from 'react'
import './Board.css'
import { Modal } from '../modal/Modal';
import { Pins } from '../pin/Pins';


class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pins: [],
            show_model: false
        }
    }

    add_pin = pinDetails => {
        this.setState(_state => {
            const new_pins = [
                ..._state.pins
            ]

            new_pins.push(
                <Pins pinDetails={pinDetails} key={_state.pins.length} />
            )

            return {
                pins: new_pins,
                show_model: false
            }
        })
    }


    render() {

        return (

            <>
                <header >
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
                                    <a href="/"><i class="fa fa-user"></i></a>
                                </div>
                                <div onClick={() => this.setState({ show_model: true })} className="menu-btn">
                                    <i class="fa fa-plus"></i>
                                </div>
                            </div>
                        </nav>

                    </div>
                </header>
                <div className="pin_container">
                    {this.state.pins}
                </div>
                <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({ show_model: false }) : null} className="add_pin_modal_container">
                    {
                        this.state.show_model ? <Modal add_pin={this.add_pin} /> : null
                    }

                </div>
            </>
        )
    }
}

export default Board