"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let percentNumber = Number(percent) / 100;
    let contributionNumber = Number(contribution);
    let amountNumber = Number(amount);
    let today = new Date();
    let period = Math.abs(today.getMonth() - date.getMonth() + 12 * (today.getFullYear() - date.getFullYear()));
    let refund;

    if (isNaN(percentNumber) === true || percentNumber < 0 || percent === "") {
    	return `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
    } else if (isNaN(contributionNumber) === true || contributionNumber < 0 || contribution === "") {
    	return `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
    } else if (isNaN(amountNumber) === true || amountNumber < 0 || amount === "") {
    	return `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`;
    }

    refund = amountNumber - contributionNumber;

    totalAmount = period * (refund * ((percentNumber / 12) + ((percentNumber / 12) / (Math.pow(1 + percentNumber / 12, period) - 1))));

    console.log(Number(totalAmount.toFixed(2)));

    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    let greeting;

    if (!name === true) {
    	name = "Аноним";
    }
    
    greeting = `Привет, мир! Меня зовут ${name}.`;

    console.log(greeting);

    return greeting;
}