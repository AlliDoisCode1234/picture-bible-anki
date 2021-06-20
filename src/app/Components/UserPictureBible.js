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
            <div className="userPictureBible__oldTestament">
            
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
                    className="userPictureBible__book" 
                    bookName="Genesis"
                    chapters='50'
                    verses='31'
                    key='bob1'
                />
                <Book 
                    bookName="Exodus"
                    chapters='50'
                    verses='31'
                    key='bob2'
                />
                <Book 
                    bookName="Leviticus"
                    chapters='50'
                    verses='31'
                    key='bob3'
                />
                <Book 
                    bookName="Numbers"
                    chapters='50'
                    verses='31'
                    key='bob4'
                />
                <Book 
                    bookName="Deuteronomy"
                    chapters='50'
                    verses='31'
                    key='bob5'
                />
                <Book 
                    bookName="Joshua"
                    chapters='50'
                    verses='31'
                    key='bob6'
                />
                <Book 
                    bookName="Judges"
                    chapters='50'
                    verses='31'
                    key='bob7'
                />
                <Book 
                    bookName="Ruth"
                    chapters='50'
                    verses='31'
                    key='bob8'
                />
                <Book 
                    bookName="1 Samuel"
                    chapters='50'
                    verses='31'
                    key='bob9'
                />
                <Book 
                    bookName="2 Samuel"
                    chapters='50'
                    verses='31'
                    key='bob10'
                />
                <Book 
                    bookName="1 Kings"
                    chapters='50'
                    verses='31'
                    key='bob11'
                />
                <Book 
                    bookName="2 Kings"
                    chapters='50'
                    verses='31'
                    key='bob12'
                />
                <Book 
                    bookName="1 Chronicles"
                    chapters='50'
                    verses='31'
                    key='bob13'
                />
                <Book 
                    bookName="2 Chronicles"
                    chapters='50'
                    verses='31'
                    key='bob14'
                />
                <Book 
                    bookName="Ezra"
                    chapters='50'
                    verses='31'
                    key='bob15'
                />
                <Book 
                    bookName="Nehemiah"
                    chapters='50'
                    verses='31'
                    key='bob16'
                />
                <Book 
                    bookName="Esther"
                    chapters='50'
                    verses='31'
                    key='bob17'
                />
                <Book 
                    bookName="Job"
                    chapters='50'
                    verses='31'
                    key='bob18'
                />
                <Book 
                    bookName="Psalms"
                    chapters='50'
                    verses='31'
                    key='bob19'
                />
                <Book 
                    bookName="Proverbs"
                    chapters='50'
                    verses='31'
                    key='bob20'
                />
                <Book 
                    bookName="Ecclesiastes"
                    chapters='50'
                    verses='31'
                    key='bob21'
                />
                <Book 
                    bookName="Song of Solomon"
                    chapters='50'
                    verses='31'
                    key='bob22'
                />
                <Book 
                    bookName="Isaiah"
                    chapters='50'
                    verses='31'
                    key='bob23'
                />
                <Book 
                    bookName="Jeremiah"
                    chapters='50'
                    verses='31'
                    key='bob24'
                />
                <Book 
                    bookName="Lamentations"
                    chapters='50'
                    verses='31'
                    key='bob25'
                />
                <Book 
                    bookName="Ezekiel"
                    chapters='50'
                    verses='31'
                    key='bob26'
                />
                <Book 
                    bookName="Daniel"
                    chapters='50'
                    verses='31'
                    key='bob27'
                />
                <Book 
                    bookName="Hosea"
                    chapters='50'
                    verses='31'
                    key='bob28'
                />
                <Book 
                    bookName="Joel"
                    chapters='50'
                    verses='31'
                    key='bob29'
                />
                <Book 
                    bookName="Amos"
                    chapters='50'
                    verses='31'
                    key='bob30'
                />
                <Book 
                    bookName="Obadiah"
                    chapters='50'
                    verses='31'
                    key='bob31'
                />
                <Book 
                    bookName="Jonah"
                    chapters='50'
                    verses='31'
                    key='bob32'
                />
                <Book 
                    bookName="Micah"
                    chapters='50'
                    verses='31'
                    key='bob33'
                />
                <Book 
                    bookName="Nahum"
                    chapters='50'
                    verses='31'
                    key='bob34'
                />
                <Book 
                    bookName="Habakkuk"
                    chapters='50'
                    verses='31'
                    key='bob35'
                />
                <Book 
                    bookName="Zephaniah"
                    chapters='50'
                    verses='31'
                    key='bob36'
                />
                <Book 
                    bookName="Haggai"
                    chapters='50'
                    verses='31'
                    key='bob37'
                />
                <Book 
                    bookName="Zechariah"
                    chapters='50'
                    verses='31'
                    key='bob38'
                />
                <Book 
                    bookName="Malachi"
                    chapters='50'
                    verses='31'
                    key='bob39'
                />
            </div>
            

                {/*  */}

                {/* Old Testament END */}

                {/*  */}

                {/*  */}

                {/*  */}

                {/* New Testament BEGINS */}

                {/*  */}
            <div className="userPictureBible__newTestament">
                
            

                <Book 
                    bookName="Matthew"
                    chapters='50'
                    verses='31'
                    key='bob40'
                />
                <Book 
                    bookName="Mark"
                    chapters='50'
                    verses='31'
                    key='bob41'
                />
                <Book 
                    bookName="Luke"
                    chapters='50'
                    verses='31'
                    key='bob42'
                />
                <Book 
                    bookName="John"
                    chapters='50'
                    verses='31'
                    key='bob43'
                />
                <Book 
                    bookName="Acts"
                    chapters='50'
                    verses='31'
                    key='bob44'
                />
                <Book 
                    bookName="Romans"
                    chapters='50'
                    verses='31'
                    key='bob45'
                />
                 <Book 
                    bookName="1 Corinthians"
                    chapters='50'
                    verses='31'
                    key='bob46'
                />
                 <Book 
                    bookName="2 Corinthians"
                    chapters='50'
                    verses='31'
                    key='bob47'
                />
                 <Book 
                    bookName="Galatians"
                    chapters='50'
                    verses='31'
                    key='bob48'
                />
                 <Book 
                    bookName="Ephesians"
                    chapters='50'
                    verses='31'
                    key='bob49'
                />
                 <Book 
                    bookName="Philippians"
                    chapters='50'
                    verses='31'
                    key='bob50'
                />
                 <Book 
                    bookName="Colossians"
                    chapters='50'
                    verses='31'
                    key='bob51'
                />
                 <Book 
                    bookName="1 Thessalonians"
                    chapters='50'
                    verses='31'
                    key='bob52'
                />
                 <Book 
                    bookName="2 Thessalonians"
                    chapters='50'
                    verses='31'
                    key='bob53'
                />
                 <Book 
                    bookName="1 Timothy"
                    chapters='50'
                    verses='31'
                    key='bob54'
                />
                 <Book 
                    bookName="2 Timothy"
                    chapters='50'
                    verses='31'
                    key='bob55'
                />
                 <Book 
                    bookName="Titus"
                    chapters='50'
                    verses='31'
                    key='bob56'
                />
                 <Book 
                    bookName="Philemon"
                    chapters='50'
                    verses='31'
                    key='bob57'
                />
                 <Book 
                    bookName="Hebrews"
                    chapters='50'
                    verses='31'
                    key='bob58'
                />
                 <Book 
                    bookName="James"
                    chapters='50'
                    verses='31'
                    key='bob59'
                />
                 <Book 
                    bookName="1 Peter"
                    chapters='50'
                    verses='31'
                    key='bob60'
                />
                 <Book 
                    bookName="2 Peter"
                    chapters='50'
                    verses='31'
                    key='bob61'
                />
                 <Book 
                    bookName="1 John"
                    chapters='50'
                    verses='31'
                    key='bob62'
                />
                 <Book 
                    bookName="2 John"
                    chapters='50'
                    verses='31'
                    key='bob63'
                />
                 <Book 
                    bookName="3 John"
                    chapters='50'
                    verses='31'
                    key='bob64'
                />
                 <Book 
                    bookName="Jude"
                    chapters='50'
                    verses='31'
                    key='bob65'
                />
                 <Book 
                    bookName="Revelation"
                    chapters='50'
                    verses='31'
                    key='bob66'
                />
                 

            </div>
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
    )
}

export default UserPictureBible
