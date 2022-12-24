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


function timesFive51(num) {
	return num * 5;
}
const a51 = timesFive51(5);
console.log(a51);


const outerWear = "T-Shirt";
function myOutfit54() {
	const outerWear54 = 'sweater';
	return outerWear54;
}
myOutfit54();


let sum55 = 0;
function addThree55() {
	sum55 = sum55 + 3;
}
function addFive55() {
	sum55 = sum55 + 5;
}
addThree55();
addFive55();
console.log(sum55);


let processed56 = 0;
function processArg56(num) {
	return (num + 3) / 5;
}
processed56 = processArg56(7);
console.log(processed56);


function nextInLine57(arr, item) {
	arr.push(item);
	let lost = arr.shift();
	return lost;
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine57(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


function welcomeToBooleans58() {
	return true;
}
console.log(welcomeToBooleans58());


function trueOrFalse59(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}
const a59 = trueOrFalse59(false);
console.log(a59);


function testEqual60(val) {
	if (val == 12) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}
a60 = testEqual60(10);
console.log(a60);


function testStrict61(val) {
	if (val === 7) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}
const a61 = testStrict61(10);
console.log(a61);


function compareEquality62(a, b) {
	if (a === b) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}
const a62 = compareEquality62(10, "10");
console.log(a62);


function testNotEqual63(val) {
	if (val != 99) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}
const a63 = testNotEqual63(99);
console.log(a63);


function testStrictNotEqual64(val) {
	if (val !== 17) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}
const a64 = testStrictNotEqual64(10);
console.log(a64);


function testGreaterThan65(val) {
	if (val > 100) {  // Change this line
		return "Over 100";
	}
	if (val > 10) {  // Change this line
		return "Over 10";
	}
	return "10 or Under";
}
const a65 = testGreaterThan65(120);
console.log(a65);


function testGreaterOrEqual66(val) {
	if (val >= 20) {  // Change this line
		return "20 or Over";
	}
	if (val >= 10) {  // Change this line
		return "10 or Over";
	}
	return "Less than 10";
}
const a66 = testGreaterOrEqual66(10);
console.log(a66);


function testLessThan67(val) {
	if (val < 25) {  // Change this line
		return "Under 25";
	}
	if (val < 55) {  // Change this line
		return "Under 55";
	}
	return "55 or Over";
}
const a67 = testLessThan67(10);
console.log(a67);


function testLessOrEqual68(val) {
	if (val <= 12) {  // Change this line
		return "Smaller Than or Equal to 12";
	}
	if (val <= 24) {  // Change this line
		return "Smaller Than or Equal to 24";
	}
	return "More Than 24";
}
const a68 = testLessOrEqual68(10);
console.log(a68);


function testLogicalAnd69(val) {
	if (val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}
const a69 = testLogicalAnd69(10);
console.log(a69);


function testLogicalOr70(val) {
	if (val < 10 || val > 20) {
		return "Outside";
	}
	return "Inside";
}
const a70 = testLogicalOr70(15);
console.log(a70);


function testElse71(val) {
	let result71 = "";
	if (val > 5) {
		result71 = "Bigger than 5";
	}
	else {
		result71 = "5 or Smaller";
	}
	return result71;
}
testElse71(4);


function testElseIf72(val) {
	if (val > 10) {
		return "Greater than 10";
	}
	else if (val < 5) {
		return "Smaller than 5";
	}
	else {
		return "Between 5 and 10";
	}
}
testElseIf72(7);


function orderMyLogic(val) {
	if (val < 5) {
		return "Less than 5";
	} else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}
orderMyLogic(7);


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes === par - 1) {
		return names[2];
	} else if (strokes === par) {
		return names[3];
	} else if (strokes === par + 1) {
		return names[4];
	} else if (strokes === par + 2) {
		return names[5];
	} else {
		return names[6];
	}
	return "Change Me";
}
golfScore(5, 4);


function caseInSwitch75(val) {
	let answer = "";
	switch (val) {
		case 1:
			return 'alpha';
			break;
		case 2:
			return 'beta';
			break;
		case 3:
			return 'gamma';
			break;
		case 4:
			return 'delta';
			break;
	}
	return answer;
}
const a75 = caseInSwitch75(1);
console.log(a75);


function switchOfStuff76(val) {
	let answer = "";
	switch (val) {
		case 'a':
			answer = 'apple';
			break;
		case 'b':
			answer = 'bird';
			break;
		case 'c':
			answer = 'cat';
			break;
		default:
			answer = 'stuff';
			break;
	}
	return answer;
}
const a76 = switchOfStuff76('b');
console.log(a76);


function sequentialSizes77(val) {
	let answer = "";
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
	}
	return answer;
}
const a77 = sequentialSizes77(7);
console.log(a77);