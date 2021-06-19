import React from 'react'
import './UserPictureBible.css'
// import useBibles from './API/UseBibles'
// import useBooks from './API/UseBooks'


// import FetchApi from '../Components/API/FetchApi';

const UserPictureBible = () => {
    // const [bibles, getBibles] = useBibles();
    // const [books, getBooks] = useBooks();
    

    return (
        <div className="userPictureBible">
            <div className="userPictureBible__InputContainer">
            
                {/* <select onClick={getBibles}>
                    Creating the default / starting option for dropdown
                    <option value="⬇️ Select Bible Version ⬇️"> -- Select a Bible Version -- </option>
                    {Object.entries(bibles).map(([ rightChar, leftChar ]) => {
                        return <option value={leftChar}>{rightChar}</option>
                    })}
                </select> */}
                {/* <FetchApi /> */}
                
                    {/* Creating the default / starting option for dropdown */}
                {/* <select onClick={getBooks}>
                    <option value="⬇️ Select Book Version ⬇️"> -- Select a Book Version -- </option>
                    {Object.entries(books).map(([ rightChar, leftChar ]) => {
                        return <option value={leftChar}>{rightChar}</option>
                    })}
                </select> */}
                {/*  */}

               
                {/* FetchApi API file for data to provide initially */}
                {/* Pull verse completion data */}
                {/* display user completion by highlighting verses after user clicks on book of bible dropdown */}
                {/* book of bible dropdown for every book with percentage completed showing by default on dropdown label */}
            </div>
        </div>
    )
}

export default UserPictureBible
