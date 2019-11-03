import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const TimePicker = (props) => {
	const { className, children, addMin, ...rest } = props;
	
	return(
		<div className={className}  {...rest}>
			<p>{children}</p>
			<ButtonGroup> 
				<Button onClick={() => addMin(60)}>+1h</Button>
				<Button onClick={() => addMin(10)}>+10m</Button>
				<Button onClick={() => addMin(1)}>+1m</Button>
			</ButtonGroup>
			<br />
			<ButtonGroup>
				<Button onClick={() => addMin(-60)}>-1h</Button>
	 			<Button onClick={() => addMin(-10)}>-10m</Button>
				<Button onClick={() => addMin(-1)}>-1m</Button>
			</ButtonGroup>
		</div>
	);	
};

export default TimePicker;