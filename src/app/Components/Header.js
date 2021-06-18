import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MessageIcon from '@material-ui/icons/Message';

const Header = () => {
    return (
        <div className="header">
            {/* <Link to="/home">
                <h1>Link to Home</h1>
            </Link> */}

            <div className="header__logoContainer">
            <Link to='/'>
                  <img 
                      src="https://i.imgur.com/JEjwXLv.png" 
                      alt="app logo" 
                      className="header__logoContainerImage" 
                  />
                </Link>
            </div>
            <div className="header__mainMenu">
                <AddIcon />
                <LibraryBooksIcon />
                <MessageIcon />
            </div>
        </div>
    )
}

export default Header
