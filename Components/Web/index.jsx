import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'

const Web = () => {
  return (
    <div>
      <Switch>
       <Route path="/" exact component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Services" component={Services}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </div>
  )

}


export default Web;