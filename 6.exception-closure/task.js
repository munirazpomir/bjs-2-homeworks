﻿function parseCount(parseNum) {
	let number = Number.parseFloat(parseNum);

	if (Number.isNaN(number)) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(validateNum) {
	try {
		return parseCount(validateNum);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return +(this.a + this.b + this.c);
	}

	get area() {
		let p = this.perimeter / 2;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
	}
}

function getTriangle(aSide, bSide, cSide) {
	try {
		return new Triangle(aSide, bSide, cSide);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}