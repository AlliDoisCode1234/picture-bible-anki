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
                <HomeIcon className="footer__menuItem" />
                <SearchIcon className="footer__menuItem" />
                <Link to='/create-post'>
                    <AddSharpIcon className="footer__menuItem" />
                </Link>
                <FavoriteBorderIcon className="footer__menuItem" />
                <Avatar 
                        className="footer__menuItem"
                        alt="JosiahJames"
                        src="/static/images/avatar/1/jpg"
                />
            </div>
        </div>
    )
}

export default Footer
