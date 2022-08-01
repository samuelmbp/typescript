let sales = 123_456_789;
let course = 'TypeScript';
let is_published: boolean = true;
let level: string;

// =============================
/** 'Any' type */
// =============================
function render(document: any) {
    console.log(document)
}

// =============================
/** 'Arrays' */
// =============================

// let numbers: number[] = ['1', 2, 3];  
// let numbers = [1, 2, 3];  
// let numbers: number[] = [];


// =============================
/** 'Tuples' -> Keep to two values for code readability */
// =============================
let user: [number, string] = [10, 'Samuel'];
user.push(1); // can add an extra value in this way (as it is an array) -> not the best.

// =============================
/** 'Enums' -> related constants */
// =============================
// enum Size { Small, Medium, Large };
// const enum Size { Small = 1, Medium, Large }; // Using const cleans the compiled code e.g. dist/index.js
// const mySize: Size = Size.Small
// console.log(mySize); // 1


// ====================================
/** 'Functions' ->  */
// ====================================
function calculateTax(income: number, taxYear: number = 2022): number { // taxYear is optional
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);


// ====================================
/** 'Objects' ->  */
// ====================================
// let employee: { id: number, name?: string} = { id: 1, name: '' }; // Name is optional (?)
// let employee: { id: number, name: string} = { id: 1, name: '' };
// employee.name = 'Sam'; 

// Read Only
// let employee: { readonly id: number, name: string, retire: (date: Date) => void } = 
//     { id: 1, name: '', retire: (date: Date) => console.log(date.getDay())};
// employee.id = 2; // error


