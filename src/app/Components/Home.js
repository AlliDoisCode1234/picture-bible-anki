import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <div className="home">
             <Link to="/login">
                <h1>Link to Login</h1>
            </Link>
            <Header />
        </div>
    )
}

export default Home
