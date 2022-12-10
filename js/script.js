// It's a comment
/* It's also 
a comment */
// var myName;
// let a;
// a = 7;
// let b;
// b = a;
// let c = 9;
// var myFirstName = 'Alex';
// var myLastName = 'Alex';

// Only change code below this line
// var a = 5;
// var b = 10;
// var c = 'I am a';
// Only change code above this line

// a = a + 1;
// b = b + 5;
// c = c + " String!";

let a = 7;
let b = 4;
a += 3;
b -= 1;
console.log(a, b); // 10 3


let a23 = 2;
let b23 = 5;
a23 *= 3;
b23 *= 5;
console.log(a23, b23); // 6 25


let a24 = 10;
let b24 = 45;
a24 /= 2;
b24 /= 5;
console.log(a24, b24); // 5 9


const myStr25 = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr25);


const myStr26 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr26);

// \'	одинарная кавычка
// \"	двойная кавычка
// \\	обратная косая черта
// \n	новая строка
// \t	табуляция
// \r	возврат каретки
// \b	граница слова
// \f	подача формы
const myStr27 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr27);


const myStr28 = "This is the start." + " This is the end.";
console.log(myStr28);


let myStr29 = 'This is the first sentence. ';
myStr29 += 'This is the second sentence.';
console.log(myStr29);


const myName30 = "Alex";
const myStr30 = "My name is " + myName30 + " and I am well!";
console.log(myStr30);


const someAdjective31 = "so long";
let myStr31 = "Learning to code is ";
myStr31 += someAdjective31;
console.log(myStr31);


let lastNameLength32 = 0;
const lastName32 = "Lovelace";
lastNameLength32 = lastName32.length;
console.log(lastNameLength32);


let firstLetterOfLastName33 = "";
const lastName33 = "Lovelace";
firstLetterOfLastName33 = lastName33[0];
console.log(firstLetterOfLastName33);


let myStr34 = "Jello World";
myStr34 = "Hello World";


const lastName35 = "Lovelace";
const thirdLetterOfLastName35 = lastName35[2];
console.log(thirdLetterOfLastName35);


const lastName36 = "Lovelace";
const lastLetterOfLastName36 = lastName36[lastName36.length - 1];
console.log(lastLetterOfLastName36);


const lastName37 = "Lovelace";
const secondToLastLetterOfLastName37 = lastName37[lastName37.length - 2];
console.log(secondToLastLetterOfLastName37);


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + ' ' + myNoun + ' ' + myVerb + " so " + myAdverb;
console.log(wordBlanks);


const myArray39 = ['hello', 500];
console.log(myArray39);


const myArray = [['I\'m inside', 1], ['I\'m also inside', 2]];


const myArray41 = [50, 60, 70];
const myData41 = myArray41[0];
console.log(myData41);


const myArray42 = [18, 64, 99];
myArray42[0] = 45;
console.log(myArray42);


const myArray43 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];
const myData43 = myArray43[2][1];
console.log(myData43);


const myArray44 = [["John", 23], ["cat", 2]];
myArray44.push(["dog", 3]);
console.log(myArray44);


const myArray45 = [["John", 23], ["cat", 2], 2, 78];
const removedFromMyArray45 = myArray45.pop();
console.log(removedFromMyArray45);
console.log(myArray45);


const myArray46 = [7, 500, ["John", 23], ["dog", 3]];
const removedFromMyArray46 = myArray46.shift();
console.log(removedFromMyArray46);
console.log(myArray46);


const myArray47 = [["John", 23], ["dog", 3]];
myArray47.shift();
myArray47.unshift(["Paul", 35]);
console.log(myArray47);


const myList48 = [
	["Chocolate", 3],
	["Milk", 2],
	["Flour", 1],
	["Eggs", 10],
	["Sugar", 1],
];


function reusableFunction() {
	console.log("Hi World");
}
reusableFunction();


function functionWithArgs(a, b) {
	let c = a + b;
	console.log(c);
}
functionWithArgs(3, 7);