import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MediaPlayer from "./mediaPlayer";

const TiPicker = styled.div`
	font-size: 20px;
	/* font-size: calk(5vmin); */
`;

const Div = styled.div`
 	background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	font-size: calc(10px + 12vmin);
  color: rgb(77, 8, 8);
`;

const ButtonGroup = styled(Div)`
  width: 200px;
	font-size: calc(10px);
  :not(:last-child) {
    border-right: none; /* Prevent double borders */
  }
`;

const Button = styled.button`
  width: 40px;
  display: inline-block;
  color: green;
	/* font-size: 1em; */
	font-size: 5vmin;
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

const Box = styled(Button)`
  width: 80px;
`;

const BoxW = styled(Button)`
	width:160px;
	color: palevioletred;
	margin: 10px;
`;

const TimePicker = props => {
	const { fullScreen, time, children, addMin, addHour, alRinging, ...rest } = props;

	const [play, setPlay] = useState(false);

	useEffect(() => {
		if (alRinging) 
			setPlay(true);
	}, 
		[alRinging]
	);
	
	useEffect(() => {
		if (!fullScreen) 
			setPlay(false);
	}, 
		[fullScreen]
	);

	const zeroMan = (val) => val < 10 ? "0" + val.toString() : val.toString();
	const min = zeroMan(time.m);
	const hour = zeroMan(time.h);

	return (
		<TiPicker {...rest}>
			{fullScreen ?
				<Div>
					{hour}:{min}
					{play &&
						<MediaPlayer></MediaPlayer>
					}
				</Div>
				:
				<Div>
					<ButtonGroup>
						<div>
							<Button onClick={() => addHour(12)}>+</Button>
							<Button onClick={() => addHour(1)}>+</Button>
							<Button onClick={() => addMin(10)}>+</Button>
							<Button onClick={() => addMin(1)}>+</Button>
						</div>
						<div>
							<Box>{time.h}</Box>
							<Box>{time.m}</Box>
						</div>
						<div>
							<Button onClick={() => addHour(-12)}>-</Button>
							<Button onClick={() => addHour(-1)}>-</Button>
							<Button onClick={() => addMin(-10)}>-</Button>
							<Button onClick={() => addMin(-1)}>-</Button>
						</div>
					</ButtonGroup>
					<BoxW onClick={() => props.setActiv()}>Activate</BoxW>
				</Div>
			}
		</TiPicker>
	);
};

export default TimePicker;
