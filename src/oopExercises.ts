/** 1. Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members
 */

class Logger {
	constructor(public fileName: string) {}

	logMessage(message: string) {}
}

// ======================================================================================================
/** 2. Given the Person class below, create a getter for getting the full name of a person.  */
class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

// ======================================================================================================
/** 3. Create a new class called Employee that extends Person and adds a new property called salary. */
class Employee extends Person {
	constructor(firstName: string, lastName: string, public salary: string) {
		super(firstName, lastName);
	}
}

// ======================================================================================================
/** 4. Given the data below, define an interface for representing employees:  */
// let employee = {
// 	name: 'John Smith',
// 	salary: 50_000,
// 	address: { street: 'Flinders st', city: 'Melbourne', zipCode: 3144 },
// };

/**  Type Aliases */
// type Address = {
// 	street: string;
// 	city: string;
// 	zipCode: number;
// };

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface Employees {
	name: string;
	salary: number;
	address: Address;
}
