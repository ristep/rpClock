import React, { useEffect, useState } from 'react';
import moment from 'moment';
import TimeSelect from './alarmTimeRender';

const OneAlarm = (props) => {
	const [alRinging, setAlRinging] = useState(false);
	const [alTime, setAlTime] = useState({ h: 6, m: 5, first: true });

	useEffect(() => {
		const { first, ...rest } = alTime; 
		if(first){
			if (localStorage.getItem("AlarmTime") === null){
				localStorage.setItem('AlarmTime', JSON.stringify(rest));
			}
		}else{
			localStorage.setItem('AlarmTime', JSON.stringify(rest));
		}	
	},
		[alTime]
	);

	const ringRing = () => {
		if (localStorage.getItem("AlarmTime") != null) {
			const aloTim = JSON.parse(localStorage.getItem("AlarmTime"));
			return moment().hour() === aloTim.h && moment().minute() === aloTim.m;
		}
		return false;
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
	
	return (
		<div>
				<TimeSelect {...props} alRinging={alRinging} time={alTime} addMin={addMin} addHour={addHour}></TimeSelect>
		</div>
	)
};

export default OneAlarm;

