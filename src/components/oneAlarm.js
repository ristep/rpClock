import React, { useEffect, useState } from 'react';
import moment from 'moment';

const timeString = (sg) => {
	return moment(sg).format("HH:mm:ss");
};

const untilTime = (at) => {
	const sega = new Date();
	return moment( at - sega ).format('HH:mm:ss');
};

const RpAlarm = (props) => {
	const { className, children, ...rest } = props;
	const [alaTime, setAlaTime] = useState(timeString(new Date()));
	const [unTime, setUnTime ] = useState(untilTime(new Date()));
	 
	useEffect(() => {
    setInterval( () => setAlaTime(timeString(new Date())),  1000 )
  });
	
	return(
	<div className={className}  {...rest}>
		<p>{children} {unTime}</p>
	</div>
)
};

export default RpAlarm;

