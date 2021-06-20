import React from 'react'
import './UserProfile.css'
import Header from './Header'
import UserPictureBible from './UserPictureBible'
import UserHeatMap from './UserHeatMap'
import UserFeed from './UserFeed'
import Decks from './Decks'
import Footer from './Footer'


const UserProfile = () => {
    return (
        <div className="userProfile">

            <Header />
            
            <UserPictureBible />
            {/* Picture Bible Component (showcase userPictureBible with saved Verse Cards) */}
            
            <UserHeatMap />
            {/* Contribution/Anki Study Heatmap */}

            <div className="userProfile__main">
                <UserFeed />
                {/* User Wall Shows Infinite Scroll of user most recent cards created */}

                <Decks />
            </div>
            {/* User Decks like sidebar */}

            <Footer />
            {/* Footer */}

        </div>
    )
}

export default UserProfile
