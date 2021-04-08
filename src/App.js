import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Studies from './components/Pages/Studies'
import Contact from './components/Pages/Contact'
import SignIn from './components/Pages/SignIn'
import Home from './components/Pages/Home'
import Level4 from './components/Pages/Level4'
import Level5 from './components/Pages/Level5'
import Level6 from './components/Pages/Level6'
import AboutMe from './components/Pages/AboutMe'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/studies' exact component={Studies} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/level4' exact component={Level4} />
        <Route path='/level5' exact component={Level5} />
        <Route path='/level6' exact component={Level6} />
        <Route path='/aboutme' exact component={AboutMe} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
