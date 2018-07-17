//
//
//
//
// //Conceptual questions
//
// //1. let variable = "value";
// //2. let variable = "differentValue";
// //3. let newVariable = variable;
//
//
// //Strings
//
// //1.
// let firstVariable = "Hello World";
// firstVariable = 12;
// let secondVariable = firstVariable;
// //value of firstVariable = 12
//
// //2.
// let yourName = "Alex Olsen";
// console.log("Hello, my name is " + yourName);
//
//
//
//
// //Booleans
//
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
//
// console.log(a < b);
// console.log(c > d);
// console.log('name' == 'name');
// console.log(a + b == c);
// console.log(a * a == d);
// console.log(e == 'Kevin');
// console.log(48 == '48');
//
//
//
// //The Farm
//
// let animal = "fish";
// if(animal == "cow") {
//   console.log("moooooooooo");
// }else {
//   console.log("Hey you're not a cow!!!");
// }
//
//
// //Driver's Ed
//
// let age = 17;
// if (age >= 16) {
//   console.log("Here are the keys, don't crash");
// }else {
//   console.log("Sorry you're not old enough");
// }
//
//
// //Just Loop It
//
// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }
// //
// // for (let i = 10; i <= 4000; i++) {
// //   console.log(i);
// // }
// //
// // for (let i = 10; i <= 4000; i+=2) {
// //   console.log(i);
// // }
//
//
// //Let's get even
//
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is an even number`);
//   }
// }
//
//
// //Give Me Five
//
// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(`${i} High five you son of a bitch!`);
//   }else if (i % 3 === 0) {
//     console.log(`${i} Three is too much`);
//   }
//   else {
//     console.log(i);
//   }
// }
//
//
// // //Savings account
//
//
// const calcSavings = () => {
//   let bank_account = 0;
//   for (let i = 1; i <= 100; i++) {
//     bank_account += 2 * i;
//   }
//   return bank_account;
// }
// console.log(calcSavings());
//
//
// //Multiples of 3 and 5
//
// const threesAndFives = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(threesAndFives());
//
// //Easy Does It
//
// const quotes = ["it really tied the room together, did it not", "obviously you're not a bowler", "it's a fucking show dog, with fucking papers"]
//
// //Random
//
// const randomThings = [1, 10, "Hello", true]
//
// //1.
// randomThings[0];
// //2.
// randomThings[2] = "World";
// //3.
// console.log(randomThings);
//
//
//
// //We've got class
//
// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// //1.
// ourClass[2];
// //2.
// ourClass[2] = "Octocat";
// //3.
// ourClass[4] = "Cloud City";
// console.log(ourClass);
//
//
//
//
//
//
// //Mix it up
//
// const myArray = [5 ,10 ,500, 20]
// myArray.push("Egon");
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift("Bob Marley");
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
//
// //Biggie Smalls
// let number = 100;
// if (number < 100) {
//   console.log("little number");
// } else {
//   console.log("big number");
// }
//
// //Monkey in the middle
//
// let number1 = -1;
// if (number1 < 5) {
//   console.log("little number");
// } if (number1 > 10) {
//   console.log("big number");
// } else {
//   console.log("monkey");
// }
//
//
// //What's in your closet?
//
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//
//
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
// let kristynsShoe = kristynsCloset[0];
// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
//
// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][1]);
// console.log(thomsCloset[2][2]);
//
//
// //Functions
//
// //printGreeting
//
// const printGreeting = (name) => {
//   console.log(`Hello there, ${name}!`);
// }
//
// printGreeting('Slimer');
//
//
//
//
//
//
// //reverseWordOrder
// let wordArray = []
// const reverseWordOrder = (string) => {
//   wordArray = string.split(" ");
//   return wordArray;
// }
// reverseWordOrder('Suck my sack');
//
// const reverseArray = (arr) => {
//   for(let i = 0; i < wordArray.length / 2; i++){
//     const temp = wordArray[i]
//     wordArray[i] = wordArray[wordArray.length - 1 -i]
//     wordArray[wordArray.length - 1 - i] = temp;
//     var final = wordArray.join(" ");
//   }return final;
// }
// console.log(reverseArray());
//
//
//
// // //calculate
//
// const calculate = (num1, num2, operation) => {
//   if (operation === 'add'){
//     return num1 + num2;
//   }else if (operation === 'sub') {
//     return num1 - num2;
//   }else if (operation === 'mult') {
//     return num1 * num2;
//   }else if (operation === 'div') {
//     return num1 / num2;
//   }else if (operation === 'exp') {
//     return Math.pow(num1, num2);
//   }else
//   return NaN;
// }
// console.log(calculate(4, 3, 'sub'));
// console.log(calculate(4, 3, 'exp'));
// console.log(calculate(39, 13, 'div'));
// console.log(calculate(1001, 5005, 'mult'));
//
// //1
//
// const printCool = (name) => {
//   console.log(`${name} is cool`);
// }
// printCool('Alex');
//
//
// //2
//
// const calcCube = (num) => {
//   console.log(num * num * num);
// }
// calcCube(5);
//
//
// //3
//
// const isAVowel = (str) => {
//   if(str === 'a' || str === 'A' || str === 'e' || str === 'E' || str === 'i' || str === 'I' || str === 'o' || str === 'O' || str === 'u' || str === 'U') {
//     console.log(true);
//   }else {
//     console.log(false);
//   }
// }
// isAVowel('I');


// //4
// let array = []
// const getTwoLengths = (str1, str2) => {
//   let letterSum1 = str1.length;
//   let letterSum2 = str2.length;
//   array.push(letterSum1);
//   array.push(letterSum2);
//   console.log(array);
// }
// getTwoLengths('alex', 'asdfasdfasdf');


//5

const array1 = ['what', 'is', 'really', 'good']
const array2 = []
const getMultipleLengths = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(i);
    console.log(arr[i]);
    let arrAtI = arr[i]
    let numCount = arrAtI.length;
    array2.push(numCount);

    }
}
getMultipleLengths(array1);
console.log(array2);

//6

const maxOfThree = (num1, num2, num3) => {
  if((num1 >= num2) && (num1 >= num3)) {
    return num1;
  }else if((num2 >= num1) && (num2 >= num3)) {
    return num2;
  }else if((num3 >= num1) && (num3 >= num2)) {
    return num3;
  }else
  return;
}
console.log(maxOfThree(10112313, 9000, 102));


//
// //7
// let array = ['thingONe', 'ThingeTwo', 'ThrIDthriDD', 'a;asd;klfasdlf'];
// let lengthOfCurrentWord = 0;
// let longestWord;
// const printLongestWord = (arr) => {
//   for(let i = 0; i < arr.length; i++){
//     lengthOfCurrentWord = arr[i].length;
//     longestWord = arr[i];
//   }console.log(longestWord);
// }
// printLongestWord(array);
//
//
// //8
//
// const transmogrify = (num1, num2, num3) => {
//   console.log(Math.pow((num1 * num2), num3));
// }
// transmogrify(5, 3, 2);
//
// //Objects
//
// //Syntax
// //
// // (const, let, var) variables that can be used to define numbers, strings, arrays, functions, etc.
// //
// // (=) assignment operator, stores objects as variables
// //
// // nameOfVariable = what you use to give name to an item(number, string, etc)
// //
// // {
// //   This is a code block,  code goes in here and is run based on certian placement and conditions
// // }
//
//
//
// //Me
//
// const me = {
//   name: 'Alex',
//   age: 26,
//   email: 'alexnolse@gmail.com',
// }
// console.log(me);
// me.name = 100;
// console.log(me.name);
// me["place of residence"] = 'Lansing, MI';
// console.log(me["place of residence"]);
//
// //Slimer
//
//
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
//
// console.log(monster.name);
// monster.type = 'creature';
// monster.age = 6;
// console.log(monster);
// //
// //
// // //Ogres
// //
// //
// // const adventurer = {
// //   name: "Fuck Boy",
// //   hitpoints: 666,
// //   attackPoints: 75,
// //   backpack: ['sword', 'sheild', 'new boots'],
// // }
// // console.log(adventurer);
// //
// // const ogre = {
// //   name: "Shrek",
// //   hitpoints: 999,
// //   attackPoints: 125,
// //   fannyPack: ['chapstick', 'La Croix', "a copy of the magazine 'Better Homes and Garden'"],
// // }
// //
// // const battleSim = (adventurer, ogre) => {
// //   for (let i = 0; (i > adventurer[hitpoints] || i > ogre[hitpoints]); i++){
// //     if (adventurer[hitpoints] > 0) {
// //       adventurer[hitpoints] = adventurer[hitpoints] - ogre[attackPoints];
// //       console.log(adventurer[hitpoints]);
// //     }
// //   }
// // }
// // battleSim();
