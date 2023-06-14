#!/usr/bin/node

let name = prompt('What is your name please ? ');
if len(name) > 10 {
	console.log('You have a really long name');
};
else if len(name) === 10 {
	console.log('The length of your name is 10');
};
else if len(name) < 10 && len(name) > 1 {
	console.log('The lenght of your name is really small');
};
else {
	console.log('Not acceptable length of name');
};
console.log('Code developed by Masino');
