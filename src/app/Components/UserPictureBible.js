import React from 'react'
import './UserPictureBible.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const UserPictureBible = () => {

    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <div className="userPictureBible">
            <div className="userPictureBible__InputContainer">
                <h1>User Picture Bible that fills out each verse of the bible user has created a card for</h1>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" />;

                {/* FetchApi API file for data to provide initially */}
                {/* Pull verse completion data */}
                {/* display user completion by highlighting verses after user clicks on book of bible dropdown */}
                {/* book of bible dropdown for every book with percentage completed showing by default on dropdown label */}
            </div>
        </div>
    )
}

export default UserPictureBible
