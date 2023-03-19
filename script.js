/*let javaScriptIsFun = true
let js = "amaizing";
console.log(40 + 8 + 23 - 10);
console.log('Ndemo Veronica')
console.log(40)
let firstName = 'Novak Kelvin'
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

let myFirstJob = 'Programmer'
let myCurrentJob = 'teacher'
console.log(myCurrentJob)
javaScriptIsFun = "Yes"
console.log(typeof javaScriptIsFun)

//undefined
let year;
console.log(year)
console.log(typeof(year))
year = 1991
console.log(year)
console.log(typeof(year))
console.log(typeof null)

const now = 2020;
 const ageVeronica = now - 2001;
 const ageMarion = now - 2006;
 console.log(ageVeronica, ageMarion);
 console.log(ageVeronica * 2, ageVeronica / 10, 2 ** 3);

 const firstVName = "Veronica";
 const lastVName = "Ndemo";

 console.log(firstVName + " " + lastVName);
 let x = 5 + 2
 x += 10
 x++
 console.log(x)
 x--
 console.log(x)

 console.log(ageMarion > ageVeronica)
console.log(ageVeronica < ageMarion)
console.log(ageVeronica >= 18)
const now = 2020;
 const ageVeronica = now - 2001;
 const ageMarion = now - 2006;
 console.log(now - 2001 > now - 2006);
*/
/* const firstName = "Veronica"
// const secondName = "Ndemo"
// const job = "student"
// const birthYear = 2001
// const year = 2023

// // const vee = "I'm " + firstName +" " +  secondName   + " at " + year +" "  + job + "at AkiraChix"  
// const vee = `I am ${firstName} ${secondName} a  ${year - birthYear} year old, a ${job} at AkiarChix`
// console.log(vee)
// console.log(`multiple lines
// string here
 made easier`)*/

 /*const age = 16



 ///If Else statements
 
if(age >= 18){
    console.log("Veronica can start driving :red_car:")
}else{
    const yearsLeft = 18 - age
    console.log(`Millie is too young. Wait another ${yearsLeft} years.`)
}
const birthYear = 1991;
let centuary;
if (birthYear <= 2001){
    let centuary = 20

}else {
    let centuary = 21
}*/

//Type conversion and type coersion

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean("Veronica"))
// console.log(Boolean(""))
// console.log(Boolean(NaN))
// console.log(Boolean(null))

// const money  = 1 
// if(money){
//     console.log("Don't spend it all")
// }else{
//     console.log("You should get a job")
// }
// let height;
// if(height){
//     console.log("Yay, HEight is defined")
// }else{
//     console.log("Height is undefined")
// }

// const age = '12' 
// if (age === 18 ){
//     console.log("You just became and adult")
// }else{
//     console.log("Not a number")
// }

// const favourite = Number(prompt("What's your favourite number"))
  
// console.log(typeof favourite)
// if(favourite === 23){
//     console.log("Cool! 23 is amaizing")
// }else if(favourite === 7){
//     console.log("Seven is also a cool number")
// }else{
//     console.log("Number is  not 23 or 7")
// }
// if (favourite !== 23){
//     console.log("Why not 23!")
// }


// Logical Operators
/* const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

// if(shouldDrive){
//     console.log("Sara is able to drive")
// }
// else{
//     console.log("Someone else should drive")
// }
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired)


if(hasDriversLicense && hasGoodVision && !isTired ){
         console.log("Sara is able to drive")
     }
     else{
         console.log("Someone else should drive")
     }
*/
/* Switch Statement
const day = 'monday'
switch(day){
    case 'monday':
        console.log("Plan my week schedule");
        console.log("Go to programming meet up");
        break;
    case 'Tuesday':
        console.log("Prepare for Kotlin Assesment");
        console.log("Prepare for python Assesment");
        break;
    case 'Wednesday':
        console.log("Do physical exercise");
        break;
    case 'Thursady':
    case 'Friday':
        console.log("Record videos");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Take my pet for walks")
        break;
    default:
        console.log("Not a Valid Day")
}
*/



/* If/else statement
let weekDay;
weekDay = 'Ttre'
if(weekDay === 'Monday'){
    console.log("Plan my week schedule");
    console.log("Go to programming meet up");
}
else if(weekDay === 'Tuesday'){
    console.log("Prepare for Kotlin Assesment");
    console.log("Prepare for python Assesment");
}
else if(weekDay == 'Wednesday'){
    console.log("Do physical exercise");
}
else if (weekDay === 'Thursday' || weekDay === 'Wednesday'){
    console.log("Do physical exercise");
}
else if (weekDay === 'Satarday' || weekDay === 'Sunday'){
    console.log("Take my pet for walks")

}
else{
    console.log("Invalid Date")
// }*/

// const age = 25
// // age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water")

// const drink = age >= 18 ? "Wine" : "water"
// console.log(drink)

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"} for today`)

/*
function logger(){
    console.log("My name is Veronica")
}
logger()
logger()
logger()
logger()
logger()

logger()
function cutFruitPieces(fruit){
    return fruit * 4

}

function fruitProcessor(apples, oranges){
    const applePeices = cutFruitPieces(apples)
    const orangePeices = cutFruitPieces(oranges )

    var juice = `Juice with ${applePeices} apple pieces and ${orangePeices} orange pieces`
    return juice

}
console.log(fruitProcessor(3,5));

const calAge = birthYear => {return 2037 - birthYear};


const yearsUntilRetirement = function(birthYear, firstName){
    const age = calAge(birthYear);
  
    const retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired`)
        return -1;
    }
    //return retirement 
    // return `${firstName} retires in ${retirement} years`
};
console.log(yearsUntilRetirement(1991, 'Veronica Ndemo'));
console.log(yearsUntilRetirement(1960, 'MArionn Njeri'));
*/

//The For Loop - Iteration

//for loops keeps runningwhile the condition is TRUE
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`)

}

const veronica = [
    'Veronica',
    'Ndemo',
    2001,
    'Student',
    ['Esther', 'Mercy', 'Pau'],
    false,
]
const types = []

for(let i= 0; i < veronica.length; i++){
    console.log(veronica[i])

    // types[i] = typeof veronica[i]
    types.push(typeof veronica[i])
}
console.log(types)


const years = [1991, 2007,  1969, 2020]

const ages = []

const now = new Date()
const currentYear = now.getFullYear()

types.push(veronica)
for(let i = 0; i < years.length; i++){
    if(typeof veronica[i] !== 'string')continue;
    console.log(veronica[i], typeof veronica[i] )

ages.push(currentYear - years[i])

}
console.log(ages)

//Looping backwards
for(let i = veronica.length -1; i >= 0; i--){
    console.log(i, veronica[i])
}

//looping backwards
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Starting exercise ${exercise}`)
    for(let rep =  1; rep <6;rep++){
    console.log(`Lifting weights repetition ${rep}`)
  

    }
}
//
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`)

// }
let rep = 1
while(rep <= 10){
    // let rep = 1;
    console.log(`WHILE: Lifting weights repetition ${rep}`)
}

let dice =Mth.trunc(Math.random()*6)
while(dice !== 6){
    console.log(`You rolled a ${dice}`)


}
