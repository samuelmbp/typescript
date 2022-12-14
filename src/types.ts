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
type Quantity = 50 | 100; // alias
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

// =====================================================
/** Optional Chaining */
// =====================================================

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

// let customer = getCustomer(0); // null
let customer = getCustomer(1); // customer

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator -> arrays
type Customers = ['Sam', 'Ia']

// Optional call
let log: any = null;
log?.('a')


// =============================================================
/** The Nullish Coaelscing Operator -> ?? (NULL OR UNDEFINED) */
// =============================================================
let speed: number  | null = null;
let ride = {
    // speed: speed !== null ? speed : 30 // JS
    speed: speed ?? 30 // JS
}

// =====================================
/** Type Assertions */
// =====================================

// const phone = document.getElementById('phone') as HTMLInputElement;
// phone.value;

const phone = <HTMLInputElement> document.getElementById('phone');
phone.value;

// =====================================
/** The unknown type */
// =====================================
function render(document: unknown) {
    // Narrowing
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}


// ==============================================
/** The never type -> values that never occur */
// ==============================================

function reject(message: string): never {
    throw new Error(message);
}
function processEvents(): never {
    while(true) {
        // Read a message from the queue
    }
}

// processEvents();
// reject('...');
// console.log('Hello, world.');











