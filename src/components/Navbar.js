import React, { Component } from "react";
import styled from 'styled-components';

const Pokenav = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items:center;
  min-width: 15%;
  min-height: 100vh;
  text-align:center;
`;

export default class Navbar extends Component{
    render(){
        return(
            <Pokenav className="bg-primary">
            <h1>PokeNav</h1>
            </Pokenav>
        );
    }
}