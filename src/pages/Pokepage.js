import React, { Component } from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import axios from "axios";

const Central= styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  width:75%;
  min-height:100%;
  padding-left:2em;
`;

const Pokemini = styled.button`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  cursor:pointer;
  width:30%;
  height:40%;
  border-radius: 1em;
  :focus{
    outline: none;
  }
`;

export default class Pokepage extends Component{
    state = {
        pokemon: [],
    }

    componentDidMount() {
        axios
          .get("https://pokedex-cjr.herokuapp.com/pokemons/" + this.props.name)
          .then(response => {
            this.setState({pokemon: response.data});
          })
          .catch(error => {
            console.error(error);
          });
      }

    render(){
      console.log(this.state.pokemon.name)
    return (
        <div className="bg-secondary">
        <Header/>
        <div style = {{display:"flex",flexDirection:"row",}}>
        <Navbar/>
        <Central>
        <Pokemini className="btn btn-dark">
            <img src={this.state.pokemon.image_url} alt={this.state.pokemon.id} />
            <div className="text-white">Nome: {this.state.pokemon.name}</div>
            <div className="text-white">Número: {this.state.pokemon.number}</div>
            <div className="text-white">Peso: {this.state.pokemon.weight}</div>
            <div className="text-white">Altura: {this.state.pokemon.height}</div>
            <div className="text-white">Tipo: {this.state.pokemon.kind}</div>
        </Pokemini>
        <div>
        </div>

        </Central>
        </div>
        </div>
    );
    }
}