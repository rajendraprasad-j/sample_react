import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings'
import Admin from './Admin'

import Home from './Home'

import { Switch ,Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Switch>
          <Route path="/admin" component={Admin}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
    </BrowserRouter>
   
  )
}

export default App;
