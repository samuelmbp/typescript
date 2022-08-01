// =============================
/** Type Aliases */
// =============================
type Employee = {
    readonly id: number, name: string, age: number, retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: '', 
    age: 27, 
    retire: (date: Date) => console.log(date.getDay())
};

// =============================
/** Union Types */
// =============================
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2; // Cast to a number
}

kgToLbs(10);
kgToLbs('10kg');