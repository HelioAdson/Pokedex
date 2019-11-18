import React, { Component } from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import axios from "axios";
import {navigate } from "@reach/router";
import rm from "../rm.png";

const Central= styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  width:75%;
  min-height:100%;
  padding-left:2em;
`;

const Fav = styled.button`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-between;
  cursor:pointer;
  min-width:50%;
  min-height:50%;
  border-radius: 1em;
`;

const Pokefav = styled.button`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  cursor:pointer;
  border-radius: 1em;
  :focus{
    outline: none;
    }
`;

const Remove = styled.button`
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

export default class User extends Component{
  constructor(props) {
    super(props)
}
    state = {
        info: [],
        user:[],
        state: true
    }
    componentDidMount() {
        axios
          .get("https://pokedex-cjr.herokuapp.com/users/" + this.props.user)
          .then(response => {
            this.setState({info: response.data.pokemons});
            this.setState({user: response.data.user.username})
          })
          .catch(error => {
            this.createuser()
          });
      }

    render(){
      console.log(this.props.user)
      if(this.state.state == true){
        return (
            <div className="bg-light">
            <Header/>
            <div style = {{display:"flex",flexDirection:"row",}}>
            <Navbar login={this.props.login}/>
            <Central>
            <h1>{this.state.user}</h1>
            <Fav className ="btn-dark text-white">
            <div>*Pokemons Favoritos*</div>
            {this.state.info.map(x => {
                return (
                    <>
                    <Pokefav className ="btn-outline-primary text-dark" onClick={() => {navigate(`/pokemon/${x.name}`)}}>
                    <div>{x.name}</div>
                    <img src={x.image_url} alt={x.id} />
                    <Remove className ="btn btn-danger text-white" onClick={() => {this.removePokemon(x.name)}}>
                    <img src={rm} style={{height:"1em"}}></img> 
                    </Remove>
                    </Pokefav>
                    </>
                    );  
            })}
            </Fav>
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
    createuser(){
      axios
      .post("https://pokedex-cjr.herokuapp.com/users/" , {username: this.props.user})
      .then(response => {
          console.log(response)
          navigate(`/user/${this.props.user}`)
      })
      .catch(error => {
        console.error(error)
      });
    }

    removePokemon(pokemon){
      axios
      .delete("https://pokedex-cjr.herokuapp.com/users/" + this.state.user + "/starred/" + pokemon)
      .then(response => {
          console.log(response)
          navigate(`/user/${this.state.user}`)
      })
      .catch(error => {
        console.error(error)
      }); 
    }
}