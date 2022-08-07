/** What are decorators?
 * -> functions that are called at the runtime
 * -> are applied to the classes and their attributes
 * -> change how they behave
 */

// ====================================
/** Class Decorators */
// ====================================
// function Component(constructor: Function) {
//     console.log('Component decorator called.');
//     // Add new properties to the prototype object
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//         console.log('Inserting the component in the DOM.');
//     }
// }

// @Component
// class ProfileComponent {

// }

// ====================================
/** Parameterized Decorators */
// ====================================
type ComponentOptions = {
	selector: string;
};

// // Decorator Factory
function Component(options: ComponentOptions) {
	return (constructor: Function) => {
		console.log('Component decorator called.');
		constructor.prototype.options = options;
		constructor.prototype.uniqueId = Date.now();
		constructor.prototype.insertInDOM = () => {
			console.log('Inserting the component in the DOM.');
		};
	};
}

// @Component({ selector: '#my-profile'})
// class ProfileComponent {}

// ====================================
/** Decorators Composition */
// ====================================
function Pipe(constructor: Function) {
	console.log('Pipe decorator called.');
	constructor.prototype.pipe = true;
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}

// ====================================
/** Method Decorators */
// ====================================
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value as Function;
	// ...args (accepts multiple arguments)
	descriptor.value = function (...args: any) {
		console.log('Before');
		original.call(this, ...args);
		console.log('After');
	};
}
class PersonDecorator {
	@Log
	say(message: string) {
		console.log(`Person says ${message}`);
	}
}

const person = new PersonDecorator();
person.say('Hello');

// ====================================================
/** Accessor(getters & setters) Decorators - Title */
// ====================================================
function Capitalize(
	target: any,
	methodName: string,
	descriptor: PropertyDescriptor
) {
	const original = descriptor.get;
	// Redefined: descriptor.get
	descriptor.get = function () {
		const result = original?.call(this);
		return typeof result === 'string' ? result.toUpperCase() : result;
	};
}
class Player {
	constructor(public firstName: string, public lastName: string) {}

	@Capitalize
	get fullName() {
		// return 0; ✅
		// return null; ✅
		return `${this.firstName} ${this.lastName}`;
	}
}

const player = new Player('samuel', 'raducan');
console.log(player.fullName);

// ======================================================
/** Property Decorators -> Enhance existing properties */
// ======================================================

function MinLength(length: number) {
	return (target: any, propertyName: string) => {
		const message = `${propertyName} should be at least ${length} characters long`;
		let value: string;
		const descriptor: PropertyDescriptor = {
			get() {
				return value;
			},
			set(newValue: string) {
				if (newValue.length < length) throw new Error(message);
				value = newValue;
			},
		};

        Object.defineProperty(target, propertyName, descriptor);
	};
}
class User {
    @MinLength(4)
	password: string;

	constructor(password: string) {
		this.password = password;
	}
}

const user = new User('four');
user.password = 'four-five'
console.log(user.password);


// ===========================================
/** Parameter Decorators -> Not used often */
// ===========================================
type WatchParameter = {
    methodName: string;
    parameterIndex: number;
}

const watchedParameters: WatchParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}
class Vehicle {
    move(@Watch speed: number) {}
}

console.log(watchedParameters);

























