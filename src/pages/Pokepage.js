import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import axios from "axios";
import {navigate } from "@reach/router";
import {fadeIn} from 'react-animations';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import star from "../star1.png";
import {Putcolor} from "../components/Colors";


const Central= styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  width:100%;
  min-height:100%;
  padding-left:2em;
`;

const Pokemini = styled.button`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: linear-gradient( -45deg , ${props => props.color},#FEFEFE);
  justify-content:space-around;
  cursor:pointer;
  border-radius: 1em;
  min-width:60%;
  min-height:60%;
  margin: 0.5em 0.5em 0.5em 0.5em;
  position: relative;
  transition: 0.3s ease-out;
  overflow: auto;
  animation: 0.2s ${keyframes`${fadeIn}`};
  &:hover {
    transform: scale(1.1);
    transition: 0.1.5s ease-out;
  }
`;

const Favorite = styled.button`
  display:flex;
  cursor:pointer;
  border-radius: 1em;
  &:hover {
    transform: scale(1.1);
    transition: 0.1.5s ease-out;
  }
`;


export default class Pokepage extends Component{
  constructor(props) {
    super(props)
}
    state = {
        pokemon: [],
        state: true,
        kind:[]
    }
    componentDidMount() {
        axios
          .get("https://pokedex-cjr.herokuapp.com/pokemons/" + this.props.name)
          .then(response => {
            this.setState({pokemon: response.data});
            this.setState({kind: response.data.kind});

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
            <div className="bg-light">
            <Header/>
            <div style = {{display:"flex",flexDirection:"row",}}>
            <Navbar login={this.props.login}/>
            <Central>
            <Pokemini color={Putcolor(this.state.kind.toString().split(';',1))} className="btn btn-dark">
                <div>
                <img src={this.state.pokemon.image_url} alt={this.state.pokemon.id}  style = {{width: "200%",height:"200%"}}/>
                </div>
                <div>
                <div className="text-white">Nome: {this.state.pokemon.name}</div>
                <div className="text-white">Número: #{('00' + this.state.pokemon.number).slice(-3)} </div>
                <div className="text-white">Peso: {this.state.pokemon.weight}</div>
                <div className="text-white">Altura: {this.state.pokemon.height}</div>
                <div className="text-white">Tipo: {this.state.pokemon.kind}</div>
                <div style = {{display:"flex",justifyContent:"flex-end"}}>
                <Favorite className="btn btn-outline-warning"  onClick={() => {navigate(`/fav/${this.props.name}`)}}>
                <img src={star} style={{height:"1em"}}></img> 
                </Favorite>
                </div>
                </div>
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