import React, { Component } from "react";
import styled from 'styled-components';
import Char from "../charmander.png";
import {navigate } from "@reach/router";

const Pokenav = styled.div`
    margin-top:0.1em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;
    min-width: 15%;
    min-height: 100vh;
    text-align:center;
`;

const Login = styled.button`
    display:flex;
    border-radius: 1em;
    text-align:center;
    justify-content:center;
    width:90%;
    :focus{
    outline: none;
    }
`;
const Offset = styled.div`
    height:1%;
`;

export default class Navbar extends Component{
    constructor(props) {
        super(props)
        // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        if(this.props.login === false){
        return(
            <Pokenav className="bg-light">
            <Offset/>
            <img src={Char} style={{height:"2.5em"}}></img> 
            <Offset/>
            <Login className="btn-outline-primary" onClick={() => {navigate(`/`)}}>Início</Login>
            <Offset/>
            <Login className="btn-outline-primary" onClick={() => {navigate(`/login`)}}>Log in</Login>
            </Pokenav>
        );
        }else{
            return(
                <Pokenav className="bg-light">
                <Offset/>
                <img src={Char} style={{height:"2.5em"}}></img> 
                <Offset/>
                <Login className="btn-outline-primary" onClick={() => {navigate(`/`)}}>Sair</Login>
                </Pokenav>
            );
        }
    }
    handleClick(){
        console.log('ok')
    }

}