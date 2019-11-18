import React, { Component } from "react";
import styled from 'styled-components';
import Logo from "../pokelogo.png";
import LogoPK from "../pk.png";
import Pikachu from "../pikachu1.png";
import {navigate } from "@reach/router";
import Play from "../player.png";

const Pokeheader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items:center;
  width: 100%;
  min-height: 30%;
  max-height: 30%;
  text-align:center;
`;
const Offset1 = styled.div`
    width:25%;
`;
const Offset2 = styled.div`
    width:40%;
`;
const Offset0 = styled.div`
    width:2%;
`;
const Home = styled.h1`
    cursor:pointer;
    :focus{
    outline: none;
    }
`;
const Pokebutton = styled.button`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  cursor:pointer;
  border-radius: 1em;
  :focus{
    outline: none;
  }
`;

export default class Header extends Component{
    constructor(props) {
        super(props)
        // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }  
    state = {
        value: [],
        pokemon:[],
  
    }
    render(){
    return(
        <Pokeheader className="bg-light">
        <img src={Logo} style={{height:"5.62em"}}></img>
        <Offset2/>
        <img src={LogoPK} style={{height:"5.62em"}}></img>
        <Home onClick={() => {navigate(`/`)}}>Pokedex</Home>
        <Offset0/>
        <img src={Pikachu} style={{height:"5.5em"}}></img>
        <Offset2/>
        <div class="form-group">
        <input type="email" class="form-control form-control-sm" placeholder="Pesquisar" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        </div>
        <Offset0/>
        </Pokeheader>
    );
    }
    handleChange(event){
        this.setState({value: event.target.value});
        console.log(this.state.value)
      }
    handleKeyDown = (e) => {
        const pokemon = this.state.value.slice();
        pokemon.toString().charAt().toLowerCase() 
        console.log(pokemon)
        if (e.key === 'Enter') {
          navigate(`/pokemon/${pokemon}`)
        }
    }
    
}