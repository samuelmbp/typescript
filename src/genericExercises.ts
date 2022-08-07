/** 1. Convert the function below to a generic function: */

// function echo(arg) { return arg; }

function programming<T>(arg: T) {
	return arg;
}

console.log(programming('Typescript'));

/** 2. When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem? */

// function printName<T>(obj:T) {console.log(obj.name);}

// IMPORTANT Type Constraints
function printName<T extends { name: string}>(obj: T) { 
    console.log(obj.name);
    
}

/** 3. An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class. */

class UniqueIdentifier<T> {
    constructor(public id: T){}
}

// const id = new UniqueIdentifier('id');
// const id = new UniqueIdentifier(123);


/** 4. Given the following interface, what does keyof User return? */

interface User { 
    userId:number; 
    username:string;
}

// it returns a union of the properties of User: ‘userId’ | ‘username’














