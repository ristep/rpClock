import React, { useEffect, useState } from 'react';
import moment from 'moment';
import TimePicker from './timePicker';
import styled from 'styled-components';

const Div = styled.div`
 	background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 12vmin);
  color: rgb(77, 8, 8);
`;

const timeString = (sg) => {
	return moment(sg).format("HH:mm");
};

const OneAlarm = (props) => {
	const { className, children, fullScreen, ...rest } = props;
	const [alMoment, setAlMoment] = useState(moment({ h:8, m:4, s:10 }).add(1,'day'));
	const [alString, setAlString] = useState(timeString(alMoment));

	function addMinutes(val){
		console.log(val);
		setAlMoment(moment(alMoment).add(val,'minutes'));
	};

	useEffect(() => {
		const int = setInterval( () => { //console.log(moment().format("HH:mm"));
			if( alMoment < moment() ) {
				setAlString('Stavaj bree!');
				clearInterval(int);
			}
		},
		1000 )
	},
	[]);
	
	return(
	<Div className={className}  {...rest}>
		{children} {timeString(alMoment)}
		{!fullScreen && 
			<TimePicker className='picker' addMin={addMinutes}></TimePicker>
		}
	</Div>
)
};

export default OneAlarm;

