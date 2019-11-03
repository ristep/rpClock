import React, { useEffect, useState } from 'react';
import moment from 'moment';
import TimePicker from './timePicker';

const timeString = (sg) => {
	return moment(sg).format("HH:mm");
};

const OneAlarm = (props) => {
	const { className, children, ...rest } = props;
	const [alMoment, setAlMoment] = useState(moment({ h:8, m:4, s:10 }).add(1,'day'));
	const [alString, setAlString] = useState(timeString(alMoment));

	function addMinutes(val){
		console.log(val);
		setAlMoment(moment(alMoment).add(val,'minutes'));
	};

	useEffect(() => {
		const int = setInterval( () => { //console.log(moment().format("HH:mm"));
			if( alMoment < moment() ) {
				setAlString('Stavaaaaaj bree!');
				clearInterval(int);
			}
		},
		1000 )
	},
	[]);
	
	return(
	<div className={className}  {...rest}>
		<p>{children} {timeString(alMoment)}</p>
		<TimePicker className='picker' addMin={addMinutes}></TimePicker>
	</div>
)
};

export default OneAlarm;

