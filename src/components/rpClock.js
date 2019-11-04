import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Div = styled.div`
  background-color: black;
  display: flex;
	flex-direction: row;
	align-items: center;
  justify-content: center;
  font-size: calc(28px + 14vmin);
  color: rgb(8, 61, 8);
`;

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
	<Div className={className}  {...rest}>
		<p>{children} {lTime}</p>
	</Div>
)
};

export default RpClock;

