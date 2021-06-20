import React from 'react'
import './Decks.css'


const Decks = () => {
    return (
        <div className="decks">
            <h3>My Decks</h3>
            <ul>
                <li>Default</li>
                <li>Grace</li>
                <li>Peace</li>
                <li>Love</li>
                <li>Joy</li>
                <li>Gentleness</li>
                <li>Patience</li>
                <li>Kindness</li>
                {/* Map through all of the user decks */}
            </ul>
        </div>
    )
}

export default Decks
