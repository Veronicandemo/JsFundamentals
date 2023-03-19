'use strict'
//for loop

/*for (let i = 0; i <= 5; i++){
console.log('in loop:', i)
}
console.log('Loop finished')

const names = ['Marie', 'Marion', 'Linda']
for (let i = 0; i < names.length; i++){
    // console.log(names[i])
    let html = `<div>${names[i]}</div>`
    console.log(html)
}
*/
//while loop
/*const names = ['Tan', 'Amari', 'Gigi']
let i = 0
// while(i < 5){
//     console.log('Loop :', i)
//     i++

// }
while(i <names.length){
    let html = `<div>${names[i]}</div>`
    i++;
    console.log(html)

}
let i = 10;
do{
    console.log('val of i is: ', i);
    i++;
}while(i < 5);
*/
/*const age = 25
if(age > 20){
    console.log('You are over 20 years old')
}
const ninjas = ['Marion', 'Linda', 'Rose', 'Millie']
if(ninjas.length > 4){
    console.log("That's a lot of ninjas")
}

const pass = 'password'
if (pass.length >= 12 && pass.includes('@')){
    console.log('That password is mighty strong')
}else if(pass.length >= 13  || pass.includes('@') && pass.length > 5){
    console.log('The password is not longggg')

}
else{
    console.log('The password is not long enough')
}

let user = false

if(!user){
    console.log('He must be logged into continue')
}

const score = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < score.length; i++){
if (score === 0){
    continue
}

if(score[i] === 100){
    console.log('Congrats you got the top score');
    break;
}
}

const grade = 'f'

switch(grade){
    case 'A':
        console.log('You have performed realy well')
        break;
    case 'B':
        console.log('Work to get to A');
        break;
    case 'C':
        console.log('You gotta work hard kid')
        break;
    case 'D': 
        console.log('Do extra work, You got it')
        break
    default: 
    console.log('Not a valid grade')

}

let weight = 30

if(true){
    console.log(weight)
    weight = 10
}
console.log(weight)

*/
// FUNCTIONS
//function declaretions
// function greet(){
//     console.log('Hello There')
// }

// const speak = function(){
//     console.log('Good Day')

// };

// greet()

//
// const speak = function(name = 'Millie', time = 'night'){
//        console.log(`Good ${time} ${name}`)
    
//      };
// speak() 

// const calcArea = function(radius) {
//     return  3.14 * radius**2;
   
// };

// const circleArea = calcArea(12)
// console.log(circleArea)

// const calcVol = function(circleArea){
//     return circleArea * 21
// }
// const vol = calcVol(circleArea)
// console.log(vol)

// //Arrow functions 

// const calcAreaArrow = radius => {` The area is ${3.14 * radius**2}`;};
// const areaA = calcAreaArrow(2)
// console.log(areaA)

// const greet = () => {console.log('Hello world')}

// greet()

// const bill = (prodduct, tax) => {
//     let total = 0
//     for(let i = 0; i < prodduct.length; i++){
//         total += prodduct[i] + prodduct[i] * tax}
//         return total

// };
// console.log(bill([15,10, 30], 0.2))

const ul = document.querySelector('.people')

const people = ['Mario', 'Jemima', 'Ndemo', 'Vero', 'Esther']
let html = ``

people.forEach(function(person){
    //create html template
    html += `<li style="color: purple">${person}</li>`
})
console.log(html)
ul.innerHTML = html