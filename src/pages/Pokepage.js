import React, { Component } from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import axios from "axios";
import {navigate } from "@reach/router";
import star from "../star1.png";

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
  flex-wrap: nowrap;
  align-items: center;
  cursor:pointer;
  min-width:30%;
  min-height:50%;
  border-radius: 1em;
  :focus{
    outline: none;
  }
`;

const Favorite = styled.button`
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  cursor:pointer;
  border-radius: 1em;
  :focus{
    outline: none;
  }
`;


export default class Pokepage extends Component{
  constructor(props) {
    super(props)
}
    state = {
        pokemon: [],
        state: true
    }
    componentDidMount() {
        axios
          .get("https://pokedex-cjr.herokuapp.com/pokemons/" + this.props.name)
          .then(response => {
            this.setState({pokemon: response.data});
            console.log(this.state.pokemon)
            if(this.state.pokemon == null){
              navigate("/x/Notfound")
            }
          })
          .catch(error => {
            this.setState({state: false});
            navigate("/x/Notfound")
          });
      }

    render(){
      if(this.state.state == true && this.state.pokemon != null){
        return (
            <div className="bg-secondary">
            <Header/>
            <div style = {{display:"flex",flexDirection:"row",}}>
            <Navbar login={this.props.login}/>
            <Central>
            <Pokemini className="btn btn-dark">
                <img src={this.state.pokemon.image_url} alt={this.state.pokemon.id} />
                <div className="text-white">Nome: {this.state.pokemon.name}</div>
                <div className="text-white">Número: {this.state.pokemon.number}</div>
                <div className="text-white">Peso: {this.state.pokemon.weight}</div>
                <div className="text-white">Altura: {this.state.pokemon.height}</div>
                <div className="text-white">Tipo: {this.state.pokemon.kind}</div>
                <Favorite className="btn btn-outline-warning"  onClick={() => {navigate(`/fav/${this.props.name}`)}}>
                <img src={star} style={{height:"1em"}}></img> 
                <div>Adicionar a favoritos</div>
                </Favorite>
            </Pokemini>
            <div>
            </div>
            </Central>
            </div>
            </div>
        );
      }else{
        return(<></>);
      }
    }
}