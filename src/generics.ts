/**IMPORTANT Generics -> Common and reusable solution(code)*/

// =====================================
/** Generic Classes */
// =====================================

class KeyValuePair<K, V> {
	// Template
	constructor(public key: K, public value: V) {}
}

const pair = new KeyValuePair('1', 'a');

// =====================================
/** Generic Functions */
// =====================================
class ArrayUtils {
	static wrapInArray<T>(value: T) {
		return value;
	}
}

const utils = ArrayUtils.wrapInArray(7);

function wrapInArray<T>(value: T) {
	return value;
}

const numbers = wrapInArray(1);

// =====================================
/** Generic Interfaces */
// =====================================
interface Result<T> {
	data: T | null;
	error: string | null;
}

function fetch<T>(url: string): Result<T> {
	return { data: null, error: null };
}

interface User {
	username: string;
}

interface Product {
	title: string;
}

const result = fetch<User>('url');
result.data;

// =====================================
/** Generic Constraints */
// =====================================
// function echo<T extends number | string>(value: T): T {
//     return value;
// }

// Object
// function echo<T extends { name: string}>(value: T): T {
//     return value;
// }
// echo({ name: 'abc'});

// interface Human {
// 	name: string;
// }

// function echo<T extends Human>(value: T): T {
// 	return value;
// }

// echo({ name: 'Samuel'})


class Human {
	constructor(public name: string){}
}

class SoftwareEngineer extends Human {};

function echo<T extends SoftwareEngineer>(value: T): T {
	return value;
}

echo(new SoftwareEngineer('Samuel'));


// =====================================
/** Extending Generic Classes */
// =====================================
interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// Pass on the generic type parameter (To the child class)
class CompressibleStore<T> extends Store<T> {

    compress() {}
}

// Restrict the generic type parameter (Use constraints)
class SearchableStore<T extends { name: string}> extends Store<T> {

    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

// Fix/terminate the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}

const store = new CompressibleStore();
store.compress();



























