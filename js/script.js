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