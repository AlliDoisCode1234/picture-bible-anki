import React from 'react'
import Book from './Book'
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

                
                <Book 
                    bookName="Genesis"
                    chapters='50'
                    verses='31'
                />
                <Book 
                    bookName="Exodus"
                    chapters='50'
                    verses='31'
                />
                <Book 
                    bookName="Leviticus"
                    chapters='50'
                    verses='31'
                />
                {/* <label for="genesis">Genesis</label>
                  <select name="Genesis" id="genesis"> */}
                    
                    {/* <optgroup label="Old Testament"> */}
                      {/* <option value="">1</option> */}
                      {/* <option value="Exodus">Exodus</option>
                      <option value="Leviticus">Leviticus</option>
                      <option value="Numbers">Numbers</option>
                      <option value="Deuteronomy">Deuteronomy</option>
                      <option value="Joshua">Joshua</option>
                      <option value="Judges">Judges</option>
                      <option value="Ruth">Ruth</option>
                      <option value="1 Samuel">1 Samuel</option>
                      <option value="2 Samuel">2 Samuel</option>
                      <option value="1 Kings">1 Kings</option>
                      <option value="2 Kings">2 Kings</option>
                      <option value="1 Chronicles">1 Chronicles</option>
                      <option value="2 Chronicles">2 Chronicles</option>
                      <option value="Ezra">Ezra</option>
                      <option value="Nehemiah">Nehemiah</option>
                      <option value="Esther">Esther</option>
                      <option value="Job">Job</option>
                      <option value="Psalms">Psalms</option>
                      <option value="Proverbs">Proverbs</option>
                      <option value="Ecclesiastes">Ecclesiastes</option>
                      <option value="Song of Solomon">Song of Solomon</option>
                      <option value="Isaiah">Isaiah</option>
                      <option value="Jeremiah">Jeremiah</option>
                      <option value="Lamentations">Lamentations</option>
                      <option value="Ezekiel">Ezekiel</option>
                      <option value="Daniel">Daniel</option>
                      <option value="Hosea">Hosea</option>
                      <option value="Joel">Joel</option>
                      <option value="Amos">Amos</option>
                      <option value="Obadiah">Obadiah</option>
                      <option value="Jonah">Jonah</option>
                      <option value="Micah">Micah</option>
                      <option value="Nahum<">Nahum</option>
                      <option value="Habakkuk<">Habakkuk</option>
                      <option value="Zephaniah">Zephaniah</option>
                      <option value="Haggai">Haggai</option>
                      <option value="Zechariah">Zechariah</option>
                      <option value="Malachi">Malachi</option>
                      <option value="Matthew">Matthew</option>
                      <option value="Mark">Mark</option>
                      <option value="Luke">Luke</option>
                      <option value="John">John</option>
                      <option value="Acts<">Acts</option>
                      <option value="Romans">Romans</option>
                      <option value="1 Corinthians">1 Corinthians</option>
                      <option value="2 Corinthians">2 Corinthians</option>
                      <option value="Galatians">Galatians</option>
                      <option value="Ephesians">Ephesians</option>
                      <option value="Philippians">Philippians</option>
                      <option value="Colossians">Colossians</option>
                      <option value="1 Thessalonians">1 Thessalonians</option>
                      <option value="2 Thessalonians">2 Thessalonians</option>
                      <option value="1 Timothy">1 Timothy</option>
                      <option value="2 Timothy">2 Timothy</option>
                      <option value="Titus">Titus</option>
                      <option value="Philemon">Philemon</option>
                      <option value="Hebrews">Hebrews</option>
                      <option value="James">James</option>
                      <option value="1 Peter">1 Peter</option>
                      <option value="2 Peter">2 Peter</option>
                      <option value="1 John">1 John</option>
                      <option value="2 John">2 John</option>
                      <option value="3 John">3 John</option>
                      <option value="Jude">Jude</option>
                      <option value="Revelation">Revelation</option> */}



                  {/* </select>

                  <select name="chapter">
                    <option value="1">1</option>

                  </select> */}

               

               
                {/* FetchApi API file for data to provide initially */}
                {/* Pull verse completion data */}
                {/* display user completion by highlighting verses after user clicks on book of bible dropdown */}
                {/* book of bible dropdown for every book with percentage completed showing by default on dropdown label */}
            </div>
        </div>
    )
}

export default UserPictureBible
