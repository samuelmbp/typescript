class Account {
	// readonly id: number; // Can only be set in the constructor
	// owner: string;
	// private _balance: number;
	// nickname?: string; // Optional (?)

	// constructor(id: number, owner: string, balance: number) {
	// 	this.id = id;
	// 	this.owner = owner;
	// 	this._balance = balance;
	// }

	// IMPORTANT: Shorter syntax (the compiler creates the properties at run time)
	constructor(
		public readonly id: number,
		public owner: string,
		private _balance: number
	) {} // Perameter Properties

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount.');
		this._balance += amount;
	}

	get balance(): number {
		return this._balance;
	}

	// set balance(value: number) {
	// 	if (value < 0) throw new Error('Invalid value.');
	// 	this._balance = value;
	// }
}

const account = new Account(1, 'Samuel', 0);
account.deposit(100);
// console.log(account instanceof Account); // True
// console.log(typeof account); // Object
// console.log(account.balance); // Getter

// =======================================================
/** Index Signatures -> Creates properties dynamically */
// =======================================================
class SeatAssignment {
	// Index Signature Property
	[seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = 'Samuel';
seats['A1'] = 'Samuel';
seats.A2 = 'Ilaria';
// seats.A2 = 2; // Error

// =======================================================
/** Static Members */
// =======================================================
class Ride {
	// Global Usage
	private static _activeRides: number = 0; // Can be used only by the 'Ride class' -> e.g. (Ride._activeRides)

	start() {
		Ride._activeRides++;
	}

	stop() {
		Ride._activeRides--;
	}

	static get activeRides() {
		return Ride._activeRides;
	}
}

// Ride.activeRides = 10; // Read only -> Cannot be modified
const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

// console.log(`First Ride: ${Ride.activeRides}`); // 2

// =======================================================
/** Inheritance */
// =======================================================
class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	walk() {
		console.log('Walking');
	}
}

class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string) {
		super(firstName, lastName);
	}

	takeTest() {
		console.log('Taking a test');
	}
}

// =======================================
/** Method Overriding */
// =======================================
class Teacher extends Person {
	override get fullName() {
		return `Professor: ${super.fullName}`;
	}
}

const teacher = new Teacher('John', 'Smith');
// console.log(teacher.fullName);

class Principle extends Person {
	override get fullName() {
		return `Principal: ${super.fullName}`;
	}
}

// =================================
/** Polymorphism -> Many Forms */
// =================================
function printNames(people: Person[]) {
	for (let person of people) console.log(person.fullName);
}

printNames([
	new Student(1, 'John', 'Smith'),
	new Teacher('Samuel', 'Raducan'),
	new Principle('Emma', 'Jo'),
]);

// =========================================================
/** Private vs Protected Members */
/**
 * 1. Private -> Can be accessed only inside the class that 
is defined but cannot be inherited (MUCH USED)
 * 2. Protected -> Same as private but can be inherited and used by a child class
 */
// =========================================================

// ==========================================================
/** Abstract Classes and Methods */
/** IMPORTANT
 * 1. Abstract methods can only exist inside abstract classes
 */
// ==========================================================

abstract class Shape {
	constructor(public color: string) {}

	abstract render(): void;
}

class Circle extends Shape {
	constructor(public radius: number, color: string) {
		super(color);
	}

	override render(): void {
		console.log('Rendering a circle');
	}
}

// ==========================================================
/** Interfaces -> Defines the shape of the objects */
/** IMPORTANT
 * - an interface is a contract
 * - cannot have implementation or logic
 * - the classes that extend it's functionality must insert all the properties and methods.
 */
// ==========================================================

// abstract class Calendar {
// 	constructor(public name: string){}

// 	abstract addEvent(): void;
// 	abstract removeEvent(): void;
// }

interface Calendar {
	name: string;
	addEvent(): void;
	addEvent(): void;
	removeEvent(): void;
}

interface CloudCalendar extends Calendar {
	sync(): void;
}

class GoogleCalendar implements Calendar {
	constructor(public name: string) {}

	addEvent(): void {
		throw new Error('Method not implemented.');
	}
	removeEvent(): void {
		throw new Error('Method not implemented.');
	}
}
