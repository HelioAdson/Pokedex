import React, { Component } from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import axios from "axios";
import {navigate } from "@reach/router";
import Jg from "../jiggly.png";

const Central = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  justify-content:flex-start;
  align-items:center;
  width:75%;
  min-height:100%;
  padding-left:2em;
`;

const Logincard = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:center;
    align-items:center;
`;

const Avatar = styled.button`
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content:center;
  align-items: center;
  cursor:pointer;
  width:20vw;
  height:40vh;
  border-radius: 100%;
  :focus{
    outline: none;
  }
`;

export default class Login extends Component{
    constructor(props) {
        super(props)
        // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        value: [],
        user:[],

    }
    Mount() {
        axios
          .get("https://pokedex-cjr.herokuapp.com/users/" + this.state.value)
          .then(response => {
            this.setState({user: response.data.user.username});
          })  
          .catch(error => {
            console.error(error);
          });
    }

    render(){
        return (
            <>
            <div className="bg-secondary">
            <Header/>
            <div style = {{display:"flex",flexDirection:"row",}}>
            <Navbar login={false}/>
            <Central>
            <Logincard>
            <Avatar className="bg-dark">
            <img src={Jg} style={{height:"80%"}}></img> 
            </Avatar>
            <div class="form-group">
            <label for="exampleInputusername1">Poke-User</label>
            <input type="email" class="form-control"  value={this.state.value} onChange={this.handleChange}/>
            </div>
            <button type="submit" class="btn btn-dark" onClick={this.handleClick}>Entrar</button>
            </Logincard>
            </Central>
            </div>
            </div>
            </>
        );
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value)
      }
    
    handleClick(){
        this.Mount()
        console.log(this.state.user)
        navigate(`/user/${this.state.value}` )
    } 
}