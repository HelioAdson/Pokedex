import React, { Component } from "react";
import styled, {keyframes} from 'styled-components';
import axios from "axios";
import {navigate } from "@reach/router";
import {fadeIn} from 'react-animations';
import Loadingball from "./Loadingball";
import {Putcolor} from "./Colors";

const Pokeboard = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:flex-start;
  align-items:center;
  align-content:space-around;
  max-width:100%;
  min-height:100%;

`;

const Pokemini = styled.button`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient( -45deg , ${props => props.color}, #FEFEFE );
  align-items: center;
  cursor:pointer;
  border-radius: 1em;
  margin: 0.5em 0.5em 0.5em 0.5em;
  position: relative;
  transition: 0.3s ease-out;
  overflow: hidden;
  animation: 0.2s ${keyframes`${fadeIn}`};
  &:hover {
    transform: scale(1.2);
    transition: all 1s 1s easy-out;
  }
`;


export default class Pokecard extends Component {
  constructor(props) {
    super(props)
    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    data: [],
    page:1,
    loading:false,
    color:[]
  };

  componentDidMount() {
    this.setState({ loading: true});
    axios
      .get("https://pokedex-cjr.herokuapp.com/pokemons?page=" + this.state.page)
      .then(response => {
        this.setState({ data: this.state.data.concat(response.data.data)});
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Pokeboard>

        {this.state.loading ? (<></>) : (<Loadingball />)}
        {this.state.data.map(x => {
          return (
            <>
            <Pokemini color={Putcolor(x.kind.split(';',1))} className="btn btn-dark" onClick={() => {navigate(`/pokemon/${x.name}`)}}>
            <img src={x.image_url} alt={x.id} />
            <div className="text-white">#{('00' + x.number).slice(-3)} </div>
            <div className="text-white">{x.name.charAt(0).toUpperCase() + x.name.slice(1)}</div>
            </Pokemini>
            </>
            );
        })}
        <button className="btn btn-dark" onClick={this.handleClick}>Ver mais</button>  
      </Pokeboard>  
      </div>
    );
  } 

  handleClick() {
    // setState com callback 
    this.setState({page: this.state.page + 1 },() => {
      this.componentDidMount();
    });
  }
}