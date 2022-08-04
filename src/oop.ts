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
	private static _activeRides: number = 0; // Can be used only by the 'Ride Class' -> e.g. (Ride._activeRides)

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

console.log(`First Ride: ${Ride.activeRides}`); // 2








