import styled, {keyframes} from 'styled-components';
import React from 'react';
import ball from "../ball.png";

const Ball = styled.div`
    transform: rotate(360deg) 
`;

function Loadingball(){
    return (
        <Ball>
        <img src={ball} style={{height:"2.5em"}}></img> 
        </Ball>
    );
}
export default Loadingball;
