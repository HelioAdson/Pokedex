import React from 'react';
import {Router} from '@reach/router';
import Pokehome from './pages/Pokehome';
import Pokepage from './pages/Pokepage';

const Notfound = () => <h1>404 - Not Found</h1>;

function App(){
  return (
    <div className="App">   
    <Router>
    <Pokehome exact path= "/"/>
    <Pokepage path="/:name"/>
    <Notfound default/>
    </Router>
    </div>
  );
}
export default App;