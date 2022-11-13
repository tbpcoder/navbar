import React, { Component } from 'react';
import { MenuItems } from './Menu';
import './Navbar.css'
import {Button} from '../Buttons'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            clicked : false
        }

        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick(){
        this.setState(state => ({
            clicked: !state.clicked
        }));
    }

    render(){
        return(
            <nav className='NavbarItems'  >
                <h1 className="navbar-logo">Navbar</h1>
                <div className="menu-icon" onClick = { this.handleClick } >
                    <i  className={this.state.clicked?'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    { MenuItems.map((item, index) => {
                        return(
                            <li key={ index }>
                                <a href={item.url} className={item.cName}>{item.title}</a>
                            </li>   
                        )
                    })}
                </ul>
                <Button />
            </nav>
        )
    }
}

export default Navbar