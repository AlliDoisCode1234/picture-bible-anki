import React from 'react'
import './Decks.css'


const Decks = () => {
    return (
        <div className="decks">
            <h3 className="decks__myDecks">My Decks</h3>
            <ul className="decks__decksList">
                <li className="decks__decksListItem">Default</li>
                <li className="decks__decksListItem">Grace</li>
                <li className="decks__decksListItem">Peace</li>
                <li className="decks__decksListItem">Love</li>
                <li className="decks__decksListItem">Joy</li>
                <li className="decks__decksListItem">Gentleness</li>
                <li className="decks__decksListItem">Patience</li>
                <li className="decks__decksListItem">Kindness</li>
                {/* Map through all of the user decks */}
            </ul>
        </div>
    )
}

export default Decks
