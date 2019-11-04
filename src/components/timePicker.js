import React from 'react';
import styled from 'styled-components';

const TiPicker = styled.div`
	font-size: 22px;
`;

const ButtonGroup = styled.div`
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
:after {
  content: "";
  clear: both;
  display: table;
}
:not(:last-child) {
  border-right: none; /* Prevent double borders */
}
`;

const Button = styled.button`
	width:200px;
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
	border-radius: 3px;
:hover {
	background:linear-gradient(to bottom, #415989 5%, #2e466e 100%);
	background-color:#415989;
}
:active {
	position:relative;
	top:1px;
}
`;

const TimePicker = (props) => {
	const { className, children, addMin, ...rest } = props;
	
	return(
		<TiPicker className={className} {...rest}>
			<ButtonGroup>
				<Button onClick={() => addMin(60)}>+ 1h</Button>
				<Button onClick={() => addMin(10)}>+ 10m</Button>
				<Button onClick={() => addMin(1)} >+ 1m</Button>
			</ButtonGroup>	
			<br />
			<ButtonGroup>
				<Button onClick={() => addMin(-60)}>- 1h</Button>
	 			<Button onClick={() => addMin(-10)}>- 10m</Button>
				<Button onClick={() => addMin(-1)} >- 1m</Button>
			</ButtonGroup>	
		</TiPicker>
	);	
};

export default TimePicker;