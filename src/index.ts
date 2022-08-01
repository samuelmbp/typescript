let sales = 123_456_789;
let course = 'TypeScript';
let is_published: boolean = true;
let level: string;

// =============================
/** 'Any' type */
// =============================
// function render(document: any) {
//     console.log(document)
// }

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