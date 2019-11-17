import React, { Component } from "react";
import {Router} from '@reach/router';
import Pokehome from './pages/Pokehome';
import Pokepage from './pages/Pokepage';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import User from './pages/User';
import Favorite from './pages/Favorite';
import Music from './components/Player';

export default class App extends Component{
  state = {
    playing: true,
  };
  render(){
    return (
      <div > 
      <Router>
      <Pokehome login={false} exact path= "/"/>
      <Pokepage login={false} exact path="/pokemon/:name"/>
      <Login exact path="/login"/>
      <User exact path="/user/:user"/>
      <Favorite exact path="/fav/:name"/>
      <Notfound default/>
      </Router>
      <Music status={this.state.playing}/>
      </div>
    );
  }
  handleClick(){
    this.setState({playing: !this.state.playing})
  }
}
