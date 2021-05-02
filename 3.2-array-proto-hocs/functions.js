// Задача №1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

let getNames = () => weapons.map(weapon => weapon.name);
let getCountReliableWeapons = endurance => weapons.filter(weapon => weapon.durability > endurance).length;
let hasReliableWeapons = endurance => weapons.some(weapon => weapon.durability > endurance);
let getReliableWeaponsNames = endurance => weapons.filter(weapon => weapon.durability > endurance).map(weapon => weapon.name);
let getTotalDamage = () => weapons.map(weapon => weapon.attack).reduce((sum, current) => sum + current);

function getValuestCountToSumValues (arr, sum) {
	let sumFirstElements = 0;
	function searchSum (item, index) {
		let result = item + sumFirstElements;
		sumFirstElements = result;
		return result;
	}
	let newArr = arr.map(searchSum);
	return newArr.slice(0, newArr.findIndex(item => (item - sum) >= 0) + 1).length;
}

//Задача №2

function sleep(milliseconds) {
	let e = new Date().getTime() + milliseconds;
	while (new Date().getTime() <= e) {}
}

function sum(...args) {
	sleep(100); 
	return args.reduce((sum, arg) => sum += +arg, 0);
}

function compareArrays (arr1, arr2) {
	return arr1.every((item, index) => item === arr2[index]) === true && arr1.length === arr2.length;
}

function memorize (fn, limit) {
	const memory = [];
	function optimization (...inputData) {
		let repeatedData = memory.find(item => compareArrays(item.args, inputData));
		if (repeatedData) {
			return repeatedData.result;
		} else  {
			let result = fn(...inputData);
			memory.push({args: inputData, result: result});
			if (memory.length > limit) memory.shift();
			return result;
		}
	}
	return optimization;
}

function testCase (testFunction, timer) {
	const arrayArguments = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
	console.time(timer);
	for (let i = 0; i <= 100; i++) {
		arrayArguments.forEach(item => testFunction.apply(this, item));
	}
	console.timeEnd(timer);
}

//console.log(testCase(sum, 'sum'));
//sum = 51004.589111328125 ms;

//const mSum = memorize(sum, 5);
//console.log(testCase(mSum, 'memorize'));
//memorize = 302.68896484375 ms;

//Оптимизированная версия выполняется значительно быстрее обычной при наличии задержки. 

//console.log(testCase(sum, 'sum without slowing down'));
//sum without slowing down: 0.280029296875 ms;

//const mSum = memorize(sum, 5);
//console.log(testCase(mSum, 'memorize without slowing down'));
//memorize without slowing down: 0.476806640625 ms;

//Оптимизированная версия выполняется немного медленнее обычной при отсутствии задержки.