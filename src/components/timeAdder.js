import React from "react";
import styled from "styled-components";

const TiPicker = styled.div`
  font-size: 22px;
`;

const ButtonGroup = styled.div`
  width: 200px;
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
  width: 20%;
  display: inline-block;
  color: green;
  font-size: 1em;
  padding: 0 0em 0em 0em;
  border: 2px solid black;
  border-radius: 3px;
  :hover {
    background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
    background-color: #415989;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

const TimePicker = props => {
	const { className, children, addMin, addHour, ...rest } = props;

	return (
		<TiPicker className={className} {...rest}>
			<ButtonGroup>
				<div>
					<Button onClick={() => addHour(10)}>+</Button>
					<Button onClick={() => addHour(1)}>+</Button>
					<Button></Button>
					<Button onClick={() => addMin(10)}>+</Button>
					<Button onClick={() => addMin(1)}>+</Button>
				</div>
				<div>
					<Button onClick={() => addHour(-10)}>-</Button>
					<Button onClick={() => addHour(-1)}>-</Button>
					<Button></Button>
					<Button onClick={() => addMin(-10)}>-</Button>
					<Button onClick={() => addMin(-1)}>-</Button>
				</div>
			</ButtonGroup>
			<br />
			<br />
			<br />
			<p></p>
		</TiPicker>
	);
};

export default TimePicker;
