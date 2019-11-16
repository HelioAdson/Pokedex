import React from 'react';
import Pokecard from '../components/Pokecard';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Pokehome(){
    return (
        <div className="bg-secondary">
        <Header/>
        <div style = {{display:"flex",flexDirection:"row",}}>
        <Navbar/>
        <Pokecard/> 
        </div>
        </div>
    );
}
export default Pokehome;