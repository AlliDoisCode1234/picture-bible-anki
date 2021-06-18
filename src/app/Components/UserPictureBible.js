import React from 'react'
import './UserPictureBible.css'
import useBibles from './API/UseBibles'

// import FetchApi from '../Components/API/FetchApi';

const UserPictureBible = () => {
    const [bibles, getBibles] = useBibles();
    

    return (
        <div className="userPictureBible">
            <div className="userPictureBible__InputContainer">
            <button onClick={getBibles}>Fetch API</button>
            <select>
                {/* Creating the default / starting option for dropdown */}
            <option value="⬇️ Select Bible Version ⬇️"> -- Select a Bible Version -- </option>
            {Object.entries(bibles).map(([ rightChar, leftChar ]) => {
                 return <option value={leftChar}>{rightChar}</option>
            })}
            </select>
                {/* <FetchApi /> */}
               
                {/* FetchApi API file for data to provide initially */}
                {/* Pull verse completion data */}
                {/* display user completion by highlighting verses after user clicks on book of bible dropdown */}
                {/* book of bible dropdown for every book with percentage completed showing by default on dropdown label */}
            </div>
        </div>
    )
}

export default UserPictureBible
