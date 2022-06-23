console.log("Hello world");

let string = "Ahoj";
const text = "Měj se";

console.log(string, text);
string = "Ahoj znovu";
console.log(string);
//text = "Měj se znovu"; //konstantu nelze přepisovat
console.log(text);


//console.log(num1 + num2 - num3 * num4 / num1);
console.log(5 + 3 - 8 * 6 / 5);


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight);
let markBmi2 = markMass / (markHeight ** 2);
console.log(markBmi);
console.log(markBmi2);

let johnBmi = johnMass / (johnHeight * johnHeight);
let johnBmi2 = johnMass / (johnHeight ** 2);
console.log(johnBmi);
console.log(johnBmi2);

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

if (markBmi > johnBmi) {
    console.log("Mark's BMI (" + Math.round(markBmi * 10) / 10 + ") is higher than John's (" + Math.round(johnBmi * 10) / 10 + ")!");
} else if (markBmi === johnBmi) {
    console.log("Marks BMI is equal to Johns.")
} else {
    console.log("John's BMI (" + Math.round(johnBmi * 10) / 10 + ") is higher than Mark's (" + Math.round(markBmi * 10) / 10 + ")!");
}

let age = 17;
if (age > 18) {
    console.log("Jsem dospělý.");
} else if (age === 18) {
    console.log("Je mi právě 18."); //else if může být více
} else if (age === 17) {
    console.log("Je mi právě 17.");
} else {
    console.log("Nejsem dospělý.");
}

let day = "tuesday";
switch (day) {
    case "monday":
        console.log("žehlení");
        console.log("praní");
        break;
    case "tuesday":
        console.log("udělat domácí úkol");
    case "wednesday":
    case "thursday":
        console.log("jít k zubaři");
        break;
    case "friday":
        console.log("jít na pivo");
        break;
    case "saturday":
    case "sunday":
        console.log("užit se víkend");
        break;
    default: console.log("nevalidní den")
}

console.log(String(23), 23);
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);
console.log(Number("Denisa"));
let Ahoj;
console.log(Ahoj);

console.log(Boolean(0));
console.log(Boolean(4));
console.log(Boolean(undefined));
console.log(Boolean("Denisa"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = -5;
if (money) {
    console.log("Neutrať to všechno.");
} else {
    console.log("Najdi si práci.");
};

// const favorite = prompt("Whats your favorite number?");
// console.log(favorite);
// console.log(typeof favorite);
// if (favorite === "3") {
//     console.log("3 je dobrá.");
// } else {
//     console.log("Nefunguju.");
// }
// if (favorite == "3") {
//     console.log("3 je dobrá.");
// } else {
//     console.log("Nefunguju.");
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let dolphins = (97 + 112 + 101) / 3;
let koalas = (109 + 95 + 106) / 3;
console.log("Dolphins: " + dolphins + ", " + "koalas: " + koalas);

if (dolphins > koalas && dolphins >= 100) {
    console.log("Dolphins win.");
} else if (dolphins > koalas) {
    console.log("Dolphins have more points, but they did not score enought points.");
} else if (dolphins < koalas && koalas >= 100) {
    console.log("Koalas win.");
} else if (dolphins < koalas) {
    console.log("Koalas have more points, but they did not score enought points.");
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log("Draw.");
} else {
    console.log("Nobody wins.");
}


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let billValue = 350;

const tip = billValue >= 50 && billValue <= 300 ? (billValue * 0.15) : (billValue * 0.2);
console.log(`Bill value: ${billValue}, tip: ${tip}, final ${billValue + tip}`);


console.log(!false);
console.log("ahoj");
console.log('ahoj');
const jmeno = "Davide";
const jmeno2 = "Karle";
let vek = 18;
console.log(`ahoj ${jmeno} a ${jmeno2} ${vek >= 18 ? "můžeš pít víno" : "dej si colu"}`); //string template - nepoužívá se +, lze psát vše za sebou


if (vek >= 18) {
    console.log("můžeš pít víno");
} else {
    console.log("dej si colu");
}
const vek2 = vek >= 18 ? "můžeš pít víno" : "dej si colu"; // za otazníkem je if, za dvojtečkou je else
console.log(vek2);

function logger() {
    console.log("My name is Denisa.");
}
logger();
logger();
logger();
logger();

function fruitProcesor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; //co je za return, to se už nestane
    console.log("čauky")
}
console.log(fruitProcesor(4, 2));
fruitProcesor(6, 9);

function drink(age) {
    let message;
    if (age >= 18) {
        message = "You can drink wine.🍷";
    } else {
        message = "You should drink juice.";
    } return message;
}

console.log(drink(12));
console.log(drink(18));

// predsatveni 1. zpusob
function introduction(name, age, job) {
    console.log(`Hello, my name is ${name}, I am ${age} years old, I work as ${job}.`);
}
introduction(`Franta`, 55, `garbage man`);

// prestaveni 2. zpusob
function introduction2(name, age, job) {
    let message = `Hello, my name is ${name}, I am ${age} years old, I work as ${job}.`;
    return message;
}
console.log(introduction2(`Franta`, 55, `garbage man`));

// diskriminant
function discriminant(a, b, c) {
    let result = (b ** 2) - (4 * a * c);
    return result;
}
console.log(discriminant(2, 10, 6));

function calcAge(birthday) {
    return 2022 - birthday;
}
const age4 = calcAge(1995);
console.log(age4);

const calcAge2 = function (birthday) {
    return 2022 - birthday;
}
console.log(calcAge2(1995));

const calcAge3 = (birthday) => {
    return 2022 - birthday;
}
console.log(calcAge3(1995));

const back = () => {
    return 15;
}

console.log(back());

const calcAge5 = (birthday, name) => {
    let age3 = 2022 - birthday;
    if (age3 >= 18) {
        console.log(`Ahoj ${name}, je ti ${age3} a muzes pit vino.`)
    } else {
        console.log(`Ahoj ${name}, je ti ${age3} a nemuzes pit vino.`)
    }
}
calcAge5(2005, "Deniso");

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3;
    return average;
}

// let avgDolphins = calcAverage(85, 54, 41);
// let avgKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    let message;
    if (avgDolphins >= (2 * avgKoalas)) {
        message = `Dolphins win (${avgDolphins} vs. ${avgKoalas}).`;
    } else if (avgKoalas >= (2 * avgDolphins)) {
        message = `Koalas win (${avgKoalas} vs. ${avgDolphins}).`;
    } else {
        message = `Nobody wins.`;
    } return message;
}

console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= (2 * avgKoalas)) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
//     } else {
//         console.log(`Nobody wins.`);
//     }
// }
// checkWinner(avgDolphins, avgKoalas);
let myName = 'Denisa';
let field = [myName, 48, true, 'apple', 2022 - 1995, [2, 3, 4]];
console.log(field);
console.log(field[1]);
console.log(field[5][1]);
field.push('Denisa'); // na konec pole prida novou hodnotu
console.log(field);
field.unshift(55);
console.log(field); // prida novou hodnotu na zacatek pole
field.pop();
console.log(field); // odebere posledni hodnotu z pole
field.shift();
console.log(field); // odebere prvni prvek
console.log(field.indexOf('apple'));
console.log(field.includes(47));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

let bills = [125, 555, 44];

const calcTip = (bills) => {
    const tips = bills >= 50 && bills <= 300 ? (bills * 0.15) : (bills * 0.2);
    return tips;
}

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

const denisaArray = [
    'Denisa',
    'Adamcova',
    2022 - 1995,
    'student',
    ['Andrea', 'Barbora', 'Tereza']
];

const denisaObj = {
    firstName: 'Denisa',
    lastName: 'Adamcova',
    age: 2022 - 1995,
    title: 'student',
    friends: ['Andrea', 'Barbora', 'Tereza']
};

console.log(denisaObj);
console.log(denisaObj.lastName); // teckova notace
console.log(denisaObj['lastName']); // zavorkova notace

const nameKey = 'Name';
console.log(denisaObj['first' + nameKey]);
console.log(denisaObj['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Denisa? You can choose between firstName, lastName, age, title, friends.');
// if (denisaObj[interestedIn]) {
//     console.log(denisaObj[interestedIn]);
// } else {
//     console.log('Wrong request. Choose between firstName, lastName, age, title, friends.');
// }

const matematika = {
    round: function (number) {
        return Math.round(number);
    },
}

console.log(matematika.round(1.5486));


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69
};

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95
};

const calcBMI = (mass, height) => {
    const bmi = mass / height ** 2;
    return bmi
};

let markBMI = Math.round(calcBMI(mark.mass, mark.height) * 10) / 10;
let johnBMI = Math.round(calcBMI(john.mass, john.height) * 10) / 10;

console.log(markBMI);
console.log(johnBMI);

const higherBMI = (markBMI, johnBMI) => {
    let message;
    if (markBMI > johnBMI) {
        message = `Mark Miller's BMI ${markBMI} is higher than John Smith's ${johnBMI}!`;
    } else if (johnBMI > markBMI) {
        message = `John Smith's BMI ${johnBMI} is higher than Mark Miller's ${markBMI}!`;
    } else {
        message = `John Smith's BMI ${johnBMI} is the same as Mark Miller's ${markBMI}!`;
    }
    return message;
}

console.log(higherBMI(markBMI, johnBMI));

console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');
let i;
for (i = 0; i <= 2; i = i + 1) {
    console.log(`Lifting weights repetition ${i + 1}`);

};
console.log(i);
for (let i = 0; i < denisaArray.length; i++) {
    console.log(denisaArray[i], typeof denisaArray[i]);
};

let ages = [];
let years = [1991, 2000, 2007, 1969];
for (let index = 0; index < years.length; index++) {
    ages.push(2022 - years[index]);

}

console.log(ages);

for (let j = 0; j < 3; j++) {
    console.log(`Exercise ${j + 1} starts: `);

    for (let i = 0; i <= 9; i = i + 1) {
        console.log(`Lifting weights repetition ${i + 1}`);

    }
};

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push((bills[i]) + tips[i]);
}
console.log(tips);
console.log(totals);

let sum = 0;
const calcAverage2 = (totals) => {
    for (let i = 0; i < totals.length; i++) {
        sum = sum + totals[i];
    };
    let average = sum / totals.length;
    return average;
}

console.log(calcAverage2(totals));




// let arr = [12,14,52,63,12,14,22]
let suma = 0;

// modus
let arr = [1, 2, 3, 4, 5, 5]
let counter = 1;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
        if (arr[i] === arr[j]) {
            counter = counter + 1;
        } else {
            counter;
        }
    }
}

// / Bubble sort Implementation using Javascript


// // Creating the bblSort function
//  function bblSort(arr){

//  for(var i = 0; i < arr.length; i++){

//    // Last i elements are already in place  
//    for(var j = 0; j < ( arr.length - i -1 ); j++){

//      // Checking if the item at present iteration 
//      // is greater than the next iteration
//      if(arr[j] > arr[j+1]){

//        // If the condition is true then swap them
//        var temp = arr[j]
//        arr[j] = arr[j + 1]

// // console.log(arr[0],counter);




// median
// let arr = [3,2,1,4,11,15,38];
arr.sort((a, b) => a - b);
console.log(arr);
const calcMedian = (arr) => {
    if (arr.length % 2 == 0) {
        let i = Math.ceil(arr.length / 2);
        let result = (arr[i] + arr[i - 1]) / 2;
        return `Pole ma sudy pocet prvku a median je ${result}`
    } else {
        let i = Math.ceil(arr.length / 2);
        return `Pole ma lichy pocet prvku a median ${arr[i - 1]}`;
    }
}
console.log(calcMedian(arr));


// prumer
for (let i = 0; i < arr.length; i = i + 1) {
    suma = suma + arr[i];
}
console.log(`Prumer je ${suma / arr.length}`);


///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/


let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

let forecast = '';

for (let i = 0; i < arr1.length; i++) {
    forecast += `${arr1[i]} ºC in day ${i + 1} ... `;
};
 
console.log(`... ${forecast}`);






