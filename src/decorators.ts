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
    selector: string
}

// Decorator Factory
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

@Component({ selector: '#my-profile'})
class ProfileComponent {}













