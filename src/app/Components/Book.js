import React from 'react'
import './Book.css'

const Book = ({ bookName, chapters, verses }) => {
    // const [chapter, setChapter] = useState();
    // const [verse, setVerse] = useState();
    // const [bookName, setBookName] = useState();

    return (
        <div className="book">
            <h2>{bookName}</h2>
            <form action="" className="book__form">
                <label for={chapters}>Chapter:</label>
                    <select name={chapters} id={chapters}>
                        <option>1</option>
                        {/* {
                            chapters.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                        } */}
                    </select>
                <label for={chapters}>Verse:</label>
                    <select name={chapters} id={chapters}>
                        <option>2</option>
                        {/* {
                            verses.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                        } */}
                    </select>
            </form>
            
        </div>
    )
}

export default Book
