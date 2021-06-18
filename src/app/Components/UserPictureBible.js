import React from 'react'
import './UserPictureBible.css'

import FetchApi from '../Components/API/FetchApi';

const UserPictureBible = () => {

    

    return (
        <div className="userPictureBible">
            <div className="userPictureBible__InputContainer">
                
                <FetchApi />
                {/* FetchApi API file for data to provide initially */}
                {/* Pull verse completion data */}
                {/* display user completion by highlighting verses after user clicks on book of bible dropdown */}
                {/* book of bible dropdown for every book with percentage completed showing by default on dropdown label */}
            </div>
        </div>
    )
}

export default UserPictureBible
