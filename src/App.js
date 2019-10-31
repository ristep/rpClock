import React, { useState, useEffect } from 'react';
import  RpClock from './components/clock';
import RpAlarm from './components/oneAlarm';

import Fullscreen from "react-full-screen";
import Button from 'react-bootstrap/Button';
import './App.css';

const  App = () => {
		const [fullScs, setFullScs] = useState(false);

		useEffect(() => {
	//		setFullScs(true);
		},
		[]);
		
		return(
    <div className="App">
			<Fullscreen enabled={fullScs}  >
				<RpClock></RpClock>
				<RpAlarm ></RpAlarm>
			</Fullscreen>
			<Button onClick={() => setFullScs(!fullScs) }>Go Fullscreen</Button>
    </div>
)};

export default App;
