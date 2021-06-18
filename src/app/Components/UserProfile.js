import React from 'react'
import './UserProfile.css'
import Header from './Header'
import UserPictureBible from './UserPictureBible'
import UserHeatMap from './UserHeatMap'

const UserProfile = () => {
    return (
        <div className="userProfile">

            <Header />
            
            <UserPictureBible />
            {/* Picture Bible Component (showcase userPictureBible with saved Verse Cards) */}
            
            <UserHeatMap />
            {/* Contribution/Anki Study Heatmap */}

            {/* User Wall Shows Infinite Scroll of user most recent cards created */}

            {/* User Decks like sidebar */}

            {/* Footer */}

        </div>
    )
}

export default UserProfile
