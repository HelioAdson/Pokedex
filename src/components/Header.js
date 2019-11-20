import React, { Component } from "react";
import styled from 'styled-components';
import Dex from "../dex.png";
import LogoPK from "../pk.png";
import {navigate } from "@reach/router";

const Pokeheader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  min-height: 30%;
  max-height: 30%;
  text-align:center;
`;
const LogoTitle = styled.div` 
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

const Offset0 = styled.div`
    width:1em;
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
        <LogoTitle>
        <img src={LogoPK} style={{height:"5.62em"}}></img>
        <Home onClick={() => {navigate(`/`)}}>Pokedex</Home>
        <Offset0/>
        </LogoTitle>
        <div class="input-group">
        <input type="email" class="form-control form-control-sm" placeholder="Pesquisar" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        </div>
        </Pokeheader>
    );
    }
    handleChange(event){
        this.setState({value: event.target.value});
        console.log(this.state.value)
      }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          navigate(`/pokemon/${this.state.value.toString().toLowerCase()}`)
        }
    }
    
}