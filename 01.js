//Basic JavaScript#

//1
//first
/* second */

//2
var myName;

//3
var a;
a = 7;

//4
var a;
a = 7;
var b;
b = a;

//5
var a = 9;

//6
var myFirstName = "Viktoriia";
var myLastName = "SV";

//7
var a;
a = 5;
var b;
b = 10;
var c;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//8
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//9
let catName = "Oliver";
let catSound = "Meow!";

//10
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

//11
const sum = 10 + 10;

//12
const difference = 45 - 33;

//13
const product = 8 * 10;

//14
const quotient = 66 / 33;

//15
let myVar = 87;
myVar++;

//16
let myVar = 11;
myVar--;

//17
let myDecimal = 5.7;

//18
const product = 2.0 * 2.5;

//19
const quotient = 4.4 / 2.0;

//20
const remainder = 11 % 3;

//21
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

//22
let a = 11;
let b = 9;
let c = 3;

a -=6 ;
b -= 15;
c -=1 ;

//23
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//24
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

//25
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//26
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//27
const myStr ="FirstLine\n\t\\SecondLine\nThirdLine";

//28
const myStr = "This is the start. " + "This is the end.";

//29
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

//30
const myName = "Vikki";
const myStr = "My name is " + myName + " and I am well!";

//31
const someAdjective = "JS is not easy. ";
let myStr = "Learning to code is interesting.";
myStr += someAdjective;

//32
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//33
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

//34
let myStr = "Jello World";
myStr = "Hello World";

//35
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

//36
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1];

//37
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length -2];

//38
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard."

//39
const myArray = ["string", 5];

//40
const myArray = [["tomatoes", 300], ["cucumbers", 500]];

//41
const myArray = [50, 60, 70];
const myData = myArray[0];

//42
const myArray = [18, 64, 99];
myArray[0] = 45;

//43
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  
  //44
  const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

//45
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

//46
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

//47
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//48
const myList = [];
myList.push(["Chocolate Bar", 15], ["Tomatoes", 10], ["Bread", 1], ["Fish", 1], ["Oil", 1]);

//49
function reusableFunction() {
  console.log("Hi World");
  };
  reusableFunction();
  
  //50
  function functionWithArgs (param1, param2) {
    console.log(param1 + param2);
    };
    functionWithArgs (5, 10);

    //51
    function timesFive(num) {
      return num * 5;
      } ;
      const answer = timesFive(10);

      //52
      function fun1() {
        
      oopsGlobal = 5;
      }
      let myGlobal = 10; 
      
      function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
          output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
          output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
      }

      //53


