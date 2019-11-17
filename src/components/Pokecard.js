import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";
import {navigate } from "@reach/router";

const Pokeboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
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
  border-radius: 1em;
  :focus{
    outline: none;
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
    page:1
  };

  componentDidMount() {
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
      <Pokeboard>
        {this.state.data.map(x => {
          return (
            <>
            <Pokemini className="btn btn-dark" onClick={() => {navigate(`/pokemon/${x.name}`)}}>
            <img src={x.image_url} alt={x.id} />
            <div className="text-white">{x.name.charAt(0).toUpperCase() + x.name.slice(1)}</div>
            </Pokemini>
            </>
            );
        })}
        <button className="btn btn-dark" onClick={this.handleClick}>Ver mais</button>
      </Pokeboard>  
    );
  } 

  handleClick() {
    // setState com callback 
    this.setState({page: this.state.page + 1 },() => {
      this.componentDidMount();
    });
  }

}