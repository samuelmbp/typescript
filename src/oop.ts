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
console.log(account instanceof Account); // True
console.log(typeof account); // Object
console.log(account.balance); // Getter
