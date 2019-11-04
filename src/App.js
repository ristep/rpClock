import React, { useState, useEffect } from 'react';
import RpClock from './components/rpClock';
import OneAlarm from './components/oneAlarm';
import styled from 'styled-components';
import Fullscreen from "react-full-screen";

const AppBox = styled.div`
  text-align: center;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  font-size: calc(24px);
  color: yellow;
`;

const Button = styled.button`
	box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	cursor:pointer;
	color: #333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
:hover {
	background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	background-color:#ffab23;
}
:active {
	position:relative;
	top:1px;
}
`;

const ButtonDark = styled.button`
 	cursor: pointer;
  margin: 10px;
  border-radius: 8px;
  text-decoration: none;
  padding: 10px;
  font-size: 22px;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  display: inline-block;
   /* color */
	color:  rgb(8, 61, 8);
	background-color:  rgb(8, 6, 8);
  border: 2px  rgb(8, 61, 8) solid;
:hover {
  color: #fff;
  background-color:  rgb(8, 61, 8);
}
`;

const  App = () => {
		const [isFull, setIsFull] = useState(false);

		return(
    <AppBox>
			<Fullscreen enabled={isFull} 	onChange={isFull => setIsFull(isFull) }>
				{ isFull ?
				 	<ButtonDark onClick={() => setIsFull(false)} >Exit Full Screen</ButtonDark>
					:
					<Button onClick={() => setIsFull(true)} >Full Screen</Button>
				}	 
				<RpClock></RpClock>
				<OneAlarm fullScreen={isFull}>Al: </OneAlarm>
			</Fullscreen>
    </AppBox>
)};

export default App;
