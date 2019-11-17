import React, { Component } from "react";
import {navigate} from '@reach/router';
import Ditto from "../ditto.png";
import styled from 'styled-components';

const Nottable= styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  width:100%;
  min-height:100vh;
`;

const Not= styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;

`;

export default class Notfound extends Component{
    render(){
        return(
            <Nottable>
            <Not>
            <img src={Ditto} style={{height:"10em"}}></img>
            <h1>404 Not Found</h1>
            </Not>
            <button className="bg-dark text-white" onClick={this.handleClick}>Página Inicial</button>
            </Nottable>
        );
    }
    handleClick(){
        navigate("/")
    }
}