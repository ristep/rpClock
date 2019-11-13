import React, { useEffect, useState } from 'react';
import moment from 'moment';
import TimeAdder from './timeAdder';
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

const OneAlarm = (props) => {
	const { className, children, fullScreen, ...rest } = props;

	const [alRinging, setAlRinging] = useState(false);
	const [alTime, setAlTime] = useState({ h: 6, m: 5, inio: true });

	useEffect(() => {
		if(!alTime.inio)
			localStorage.setItem('AlarmTime', JSON.stringify(alTime));
		console.log(alTime);
	},
		[alTime]
	);

	const ringRing = () => {
		const aloTim = JSON.parse(localStorage.getItem("AlarmTime"));
		return moment().hour() === aloTim.h && moment().minute() === aloTim.m
	};

	useEffect(() => {
		if (localStorage.getItem("AlarmTime") != null) {
			setAlTime(JSON.parse(localStorage.getItem("AlarmTime")));
		}
		setInterval(() => {
			if (ringRing()) {
				setAlRinging(true);
			}
			else {
				setAlRinging(false);
			}
		}, 1000)
	},
		[]
	);

	const addMin = (val) => {
		alTime.m += val;
		if (alTime.m > 59) {
			alTime.m = alTime.m - 60;
			addHour(1);
		}
		if (alTime.m < 0) {
			alTime.m = 60 + alTime.m;
			addHour(-1);
		}
		setAlTime({ h: alTime.h, m: alTime.m });
	};

	const addHour = (val) => {
		alTime.h += val;
		if (alTime.h > 23) {
			alTime.h = alTime.h - 24;
		}
		if (alTime.h < 0) {
			alTime.h = 24 + alTime.h;
		}
		setAlTime({ h: alTime.h, m: alTime.m });
	};

	const zeroMan = (val) => val < 10 ? "0" + val.toString() : val.toString();

	const timeRender = () => {
		const min = zeroMan(alTime.m);
		const hour = zeroMan(alTime.h);
		return (
			<div>
				{hour}:{min}
				{!fullScreen &&
					<TimeAdder addMin={addMin} addHour={addHour}></TimeAdder>
				}
				{alRinging &&
					<h3>Ring Ring</h3>
				}
			</div>
		)
	}

	return (
		<Div className={className} {...rest}>
			{timeRender()}
		</Div>
	)
};

export default OneAlarm;

