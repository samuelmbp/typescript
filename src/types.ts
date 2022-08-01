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

// ===============================
/** Intersection Types */
// ===============================
// let weight: number & string;
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

// Must have both: draggable and resizable
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// =====================================================
/** Literal Types -> limit the number / string etc... */
// =====================================================
// =====================================================
type Quantity = 50 | 100; // alias number
let quantity: Quantity = 100

type Size = 'cm' | 'inch' // alias string
let size: Size = 'cm';


// =====================================================
/** Nullable Types */
// =====================================================

function greet(name:string | null | undefined) { // Allow
    if (name)
        console.log(name.toUpperCase())
    else 
        console.log('Hola!');
}

greet(null);

