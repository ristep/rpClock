import React, { useState } from 'react';
import RpClock from './components/rpClock';
import OneAlarm from './components/oneAlarm';
import Logo from './components/logoComp';
import styled from 'styled-components';
import Fullscreen from "react-full-screen";

const AppBox = styled.div`
  text-align: center;
  background-color: black;
  flex-direction: column;
  justify-content: center; 
`;

const Button = styled.button`
	box-shadow: 0px 10px 14px -7px #9acc85;
	background:linear-gradient(to bottom, #74ad5a 5%, #68a54b 100%);
	background-color:#74ad5a;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #92b879;}
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
	background-color:  rgb(8, 6, 8, 0.2);
  border: 2px  rgb(8, 61, 8) solid;
:hover {
  color: #fff;
  background-color:  rgb(8, 61, 8);
}
`;

const DivSticky = styled.div`
  position: absolute;
	top: 0;
	left: 43%;
`;

const DivD = styled.div`
`;

const App = () => {
	const [isFull, setIsFull] = useState(false);

	return (
		<AppBox>
			<Fullscreen enabled={isFull} onChange={isFull => setIsFull(isFull)}>
				<Logo></Logo> 
				<DivD>
					<RpClock></RpClock>
					<OneAlarm fullScreen={isFull} setActiv={() => setIsFull(true)} ></OneAlarm>
				</DivD>
				<DivSticky>
					{isFull ?
						<ButtonDark onClick={() => setIsFull(false)} >Exit Full Screen</ButtonDark>
						:
						<Button onClick={() => setIsFull(true)} >Full Screen</Button>
					}
				</DivSticky>
			</Fullscreen>
		</AppBox>
	)
};

export default App;
