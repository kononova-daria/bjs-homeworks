//Задача №1

class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	set state (newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState >= 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state () {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

//Задача №2

class Library {
	constructor (name) {
		this.name = name;
		this.books = [];
	}
	addBook (book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			} 
		}
		return null;
	}
	giveBookByName(bookName) {
		let takenBook;
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				takenBook = this.books[i];
				this.books.splice(i, 1);
				return takenBook;
			}
		}
		return null;
	}
}

//Задача №3

class StudentLog {
	constructor (name) {
		this.name = name;
		this.marks = {};
	}
	getName () {
		return this.name;
	}
	addGrade (grade, subject) {
		if (this.marks.hasOwnProperty(subject) === false) {
			this.marks[subject] = [];
		}
		if (typeof grade === "number" && grade >= 1 && grade <= 5) {
			this.marks[subject].push(grade);
		} else {
			console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
		}
		return this.marks[subject].length;
	}
	getAverageBySubject (subject) {
		for (let prop in this.marks) {
			if (prop === subject) {
				let sum = 0;
				for (let i = 0; i < this.marks[subject].length; i++) {
					sum = sum + this.marks[subject][i];
				}
				return sum / this.marks[subject].length;
			} else {
				return 0;
			}
		}
	}
	getTotalAverage () {
		let sum = 0;
		let n = 0;
		for (let prop in this.marks) {
			for (let i = 0; i < this.marks[prop].length; i++) {
				sum = sum + this.marks[prop][i];
				n++;
			}
		}
		if (n === 0) {
			return 0;
		} else {
			return sum / n;
		}
	}
}