import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LoginScreen from './LoginScreen';
import HomeScreen from "./screens/HomeScreen";
import { auth } from "./firebase"

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //log in
        console.log(userAuth)
      } else {
        //log out
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;
