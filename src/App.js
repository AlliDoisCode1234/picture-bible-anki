import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './app/Components/Home'
import Login from "./app/Components/Login"
import Header from './app/Components/Header';
import CreateCard from './app/Components/CreateCard'
import FetchApi from './app/Components/API/FetchApi';

import { auth, provider } from './firebase'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from './features/userSlice'
import UserProfile from './app/Components/UserProfile';
import SalesLanding from './app/Components/SalesLanding';
import Messages from './app/Components/Messages';
import Decks from './app/Components/Decks';
import UserPictureBible from './app/Components/UserPictureBible';

function App() {
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>{
        dispatch(setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email
        }))
      })
      .catch((err) => alert(err.message))
  }

  const handleSignout = () => {
    auth
      .signOut()
      .then(()=>{
        dispatch(setUserLogOutState())
      })
      .catch((err) => alert(err.message))
  }


  return (

    // BEM naming convention
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/decks">
            <Decks />
          </Route>
          <Route path="/createCard">
            <CreateCard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>


          <Route path="/">
          <Header />
          <UserPictureBible />
          <FetchApi />



            {
              userName ? (
                
                <button className="app__signOut" onClick={handleSignout} >Sign out</button>
              ):(
                <button className="app__signIn" onClick={handleSignin}>Sign in</button>
              )
            }
            {
              userName ? (
                <UserProfile />
              ): (
                <SalesLanding />
              )
            }
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;