// ===============
/** DONE: FUNDAMENTALS*/
// ===============
/** 1. For each of these values, what type will the TypeScript compiler infer? */
let a = 100; // Number
let b = 'Coffee'; // String
let c = [true, false, false]; // Boolean
// let d = {age: number}; // { age: 20}
let e = [3]; // number[]
let f; // any
let g = []; // any[]

/** 2. What are the compilation errors in each of the following code snippets? */
// ==========================================================================================
// let song: { title: string, releaseYear: number} = { title:'My song'}; // error: releaseYear must be assigned a value or ''
let song: { title: string; releaseYear: number } = {
	title: 'My song',
	releaseYear: 2022,
}; // Good

// ==========================================================================================
let prices = [100, 200, 300]; // number[]
// prices[0] = '$100'; // error (cannot contain a string)
prices[0] = 100; // Good

// ==========================================================================================
// function myFunc(a:number, b:number):number {} //error: must use the arguments

function myFunc(a: number, b: number): number {
	// Good
	return a * b;
}

// ================================
/** TYPES */
// ================================

// 1. Define type alias for representing users
// type User = { name: string; age: number; occupation?: string }; // occupation = optional

// const users: User[] = [
// 	{
// 		name: 'Jacob Smith',
// 		age: 30,
// 		occupation: 'Software Engineer',
// 	},
// 	{
// 		name: 'Katie Muller',
// 		age: 28,
// 	},
// ];

// 2. Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these.
type Bird = {
	fly: () => void;
};
type Fish = {
	swim: () => void;
};

type Pet = Bird | Fish;

// 3. Define a type for representing the days of the week. Valid values 'Monday', 'Tuesday', etc...
type WeekDays =
	| 'Monday'
	| 'Tuesday'
	| 'Wednesday'
	| 'Thursday'
	| 'Friday'
	| 'Saturday'
	| 'Sunday';
const days: WeekDays = 'Wednesday';

// 4. Simplify the following code snippets:

// ========================================================================
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// console.log((user && user.address) ?? user.address.street) // simplified
// console.log(user?.address?.street); // simplified

// ========================================================================
// let x = foo !== null && foo !== undefined ? foo : bar();
// let x = foo ?? bar(); // simplified

// 5. Find the problem in the blow piece of code
let value: unknown = 'abc';
// console.log(value.toUpperCase()); // value does not contain the toUpperCase() method

if (typeof value === 'string') {
    console.log(value.toUpperCase())
}
