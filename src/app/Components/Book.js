import React from 'react'
import './Book.css'

const Book = ({ key, bookName, chapters, verses }) => {
    // const [chapter, setChapter] = useState();
    // const [verse, setVerse] = useState();
    // const [bookName, setBookName] = useState();

  

    return (
        <div className="book">
            <h2 id={key}>{bookName}</h2>
            <form action="" className="book__form">
                <label for={chapters}>:</label>
                    <select name={chapters} id={chapters}>
                        
                        console.log(chapters)
                        
                        
                        {
                            Object.entries(chapters).map((value) => {
                                return <option value={value}>{value}</option>
                            })
                        }
                    </select>
                <label for={chapters}></label>
                    <select name={chapters} id={chapters}>
                        
                        console.log(verses)
                        {
                            Object.entries(verses).map((value) => {
                                return <option value={value}>{value}</option>
                            })
                        }
                    </select>
            </form>
            
        </div>
    )
}

export default Book
