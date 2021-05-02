class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock (time, fn, id) {
		if (!id) {
			throw new Error("ID не передан");
		}
		if (this.alarmCollection.find(item => item.id === id)) {
			return console.log("Звонок с данным ID уже существует");
		} 
		this.alarmCollection.push({id: id, time: time, callback: fn});
	}
	removeClock (id) {
		try {
			this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
			return true;
		} catch(e) {
			return false;
		}
	}
	getCurrentFormattedTime () {
		function record (number) {
			if (number >= 10) {
				return `${number}`;
			} else {
				return `0${number}`;
			}
		}
		let now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		return `${record(hours)}:${record(minutes)}`;
	}
	start () {
		let nowTime = this.getCurrentFormattedTime();
		function checkClock (call) {
			if (call.time === nowTime) {
				return call.callback;
			}
		}
		if (!this.timerId) {
			this.timerId = setInterval(this.alarmCollection.forEach(call => checkClock(call)));
		}
	}
	stop () {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	printAlarms () {
		console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
		this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`));
	}
	clearAlarms () {
		stop();
		this.alarmCollection.splice(0);
	}
}

function testCase () {
	let alarm = new AlarmClock();
	alarm.addClock("19:11", () => console.log("Пора вставать!-1"), 1);
	alarm.addClock("19:12", () => {console.log("Пора вставать!-2"); alarm.removeClock(2)}, 2);
	alarm.addClock("19:13", () => {
		console.log("Пора вставать!-3"); 
		alarm.clearAlarms(); 
		alarm.printAlarms()
	}, 3);
	alarm.printAlarms();
	alarm.start();
}