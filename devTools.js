const dogs = [ { name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 } ];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!');

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('oh nooo');

// Error :|
console.error('shit!');

// Info
console.info('Crocs eat 3-4 people per year');

// Testing
console.assert(1 === 2, 'that is wrong!');

// clearing

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p); //will open up the <p> element and all properties/methods, etc that lives on that element

// Grouping together
dogs.forEach((dog) => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Snickers');
console.count('Snickers');
console.count('Hugo');
console.count('Snickers');
console.count('Snickers');
//this will count how many times each thing has been run

// timing
console.time('fetching data');
fetch('http://api.gihub.com/users/cdasilva').then((data) => data.json()).then((data) => {
	console.timeEnd('fetching data');
	console.log(data);
});

//table
console.table(dogs);
