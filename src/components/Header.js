import React, { Component } from "react";
import styled from 'styled-components';
import Logo from "../pokelogo.png";
import LogoPK from "../pk.png";

const Pokeheader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items:center;
  width: 100%;
  min-height: 30%;
  max-height: 30%;
  text-align:center;
`;
const Offset = styled.div`
    width:25%;

`;
export default class Header extends Component{
    render(){
        return(
            <Pokeheader className="bg-danger">
            </Pokeheader>
        );
    }
}