import React, { useEffect, useState } from 'react';
import moment from 'moment';

const timeString = (sg) => {
	return moment(sg).format("HH:mm:ss");
}

const RpClock = (props) => {
	const { className, children, ...rest } = props;
	const [lTime, setTime] = useState(timeString(new Date()));

	useEffect(() => {
    setInterval( () => setTime(timeString(new Date())),  1000 )
  });
	
	return(
	<div className={className}  {...rest}>
		<p>{children} {lTime}</p>
	</div>
)
};

export default RpClock;

