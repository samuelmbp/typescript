/**IMPORTANT Generics -> Common and reusable solution(code)*/

// =====================================
/** Generic Classes */
// =====================================

class KeyValuePair<K, V> { // Template
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








































