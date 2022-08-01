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
let song: { title: string, releaseYear: number} = { title:'My song', releaseYear: 2022};  // Good

// ==========================================================================================
let prices = [100, 200, 300]; // number[]
// prices[0] = '$100'; // error (cannot contain a string)
prices[0] = 100 // Good

// ==========================================================================================
// function myFunc(a:number, b:number):number {} //error: must use the arguments

function myFunc(a:number, b:number):number { // Good
    return a * b;
}