import React from 'react';
import Pokecard from '../components/Pokecard';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Pokehome(props){
    return (
        <div className="bg-light">
        <Header/>
        <div style = {{display:"flex",flexDirection:"row",}}>
        <Navbar login={props.login}/>
        <Pokecard/> 
        </div>  
        </div>
    );
}
export default Pokehome;