class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find(ring => ring.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(ring => ring.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(ring => {
				if (ring.time === this.getCurrentFormattedTime() && ring.canCall) {
					ring.canCall = false;
					ring.callback();
				}
			})
		});
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(ring => ring.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}