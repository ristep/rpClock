import React, { useEffect, useState } from 'react';
import moment from 'moment';

const timeString = (sg, format ) => {
	if(format)
		return moment(sg).format(format);
	else	
		return moment(sg).format("HH:mm:ss");
}

const RpClock = (props) => {
	const { className, children, ...rest } = props;
	const [lTime, setTime] = useState(timeString(undefined,'HH:mm:ss'));

	useEffect(() => {
    setInterval( () => setTime(timeString(undefined,'HH:mm:ss')),  1000 )
  },[]);
	
	return(
	<div className={className}  {...rest}>
		<p>{children} {lTime}</p>
	</div>
)
};

export default RpClock;

