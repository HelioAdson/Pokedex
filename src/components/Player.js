import React, { Component } from "react";
import soundfile from "../pokeintro.mp3";
import Sound from "react-sound";
import styled from 'styled-components';
import Play from "../player.png";

const Pokebutton = styled.button`
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

export default class Music extends Component {
  state = {
    playing: true,
  };
  render() {
  if(this.props.status === true){
    return (
      <>
       <Sound
       url={soundfile}
       playStatus={Sound.status.PLAYING}
       volume={50}
       onLoading={this.handleSongLoading}
       onPlaying={this.handleSongPlaying}
       onFinishedPlaying={this.handleSongFinishedPlaying}
       loop={true}
       />
       </>
     );
  }else{
    return (
      <>
       <Sound
       url={soundfile}
       playStatus={Sound.status.PAUSED}
       volume={50}
       onLoading={this.handleSongLoading}
       onPlaying={this.handleSongPlaying}
       onFinishedPlaying={this.handleSongFinishedPlaying}
       loop={true}
       />
       </>
     );
  }
 }
}
