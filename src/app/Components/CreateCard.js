import React, { useState } from 'react'
import './CreateCard.css'
import useBibles from './API/UseBibles'

const CreateCard = () => {
    const [bibles, getBibles] = useBibles();
    const [query, setQuery] = useState("")

    const onChange = (e) => {
        setQuery(e.target.value)
    }


    return (
        <div className="createCard">
            <input type="text" value={query} onChange={onChange} />
            <div className="createCard__top">
                <select onClick={getBibles}>
                        {/* Creating the default / starting option for dropdown */}
                        <option value="⬇️ Select Bible Version ⬇️"> -- Select a Bible Version -- </option>
                        {Object.entries(bibles).map(([ rightChar, leftChar ]) => {
                            return <option value={leftChar}>{rightChar}</option>
                        })}
                </select>
            </div>
        </div>
    )
}

export default CreateCard
