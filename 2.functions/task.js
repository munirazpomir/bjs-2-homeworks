function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	let avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	let elementsSumm = arr.reduce((perviousValue, currentValue) => perviousValue + currentValue, sum);
	return elementsSumm;
}

function differenceMaxMinWorker(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let diff;

	if (arr.length === 0) {
		diff = 0;
	} else {
		diff = max - min;
	}
	return diff;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let average = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
		average = sumEvenElement / countEvenElement;
	}
	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let num;

	for (let i = 0; i < arrOfArr.length; i++) {
		num = arrOfArr[i];
		const result = func(...num);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}