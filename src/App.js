import React, { useState, useEffect } from 'react';
import RpClock from './components/rpClock';
import OneAlarm from './components/oneAlarm';

import Fullscreen from "react-full-screen";
import Button from 'react-bootstrap/Button';

// import './App.css';

const  App = () => {
		const [fullScs, setFullScs] = useState(false);

		useEffect(() => {
	//		setFullScs(true);
		},
		[]);
		
		return(
    <div className="App">
			<Fullscreen enabled={fullScs}  >
				<RpClock className='clock'></RpClock>
				<OneAlarm className='alarm'>Al: </OneAlarm>
			</Fullscreen>
			<Button onClick={() => setFullScs(!fullScs) }>Go Fullscreen</Button>
    </div>
)};

export default App;
