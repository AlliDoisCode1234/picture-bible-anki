import React from 'react'
import './Footer.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from "@material-ui/core/Avatar"
// import CloseIcon from '@material-ui/icons/Close';
// import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__menu">
                <Link to='/globalFeed'>
                    <HomeIcon className="footer__menuItem" />
                </Link>
                <SearchIcon className="footer__menuItem" />
                <Link to='/createCard'>
                    <AddSharpIcon fontSize="30px" className="footer__menuItem" />
                </Link>
                <FavoriteBorderIcon className="footer__menuItem" />
                <Link to='/userProfile'>
                    <Avatar 
                            className="footer__menuItem"
                            alt="JosiahJames"
                            src="/static/images/avatar/1/jpg"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Footer
