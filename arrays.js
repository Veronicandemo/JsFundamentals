'use strict'
// ARRAYS INTRODUCTION
/*
const  friends = ['Linda', 'Maria', 'Steve']
console.log(friends)
console.log(friends[0]) //element 1
console.log(friends[2]) // element number 3
console.log(friends.length) //the number of elements in the  array -Not zero based
console.log(friends[friends.length -1]) //last element in the array
console.log(friends[2] = 'Jay') //mutate the array change steve to jay
console.log(friends)
//friends = ['Bob', 'Novak'] //an error because the array is declared with const
//Another way to create an array

const years = new Array(1771, 1899, 2001, 1997)
console.log(years)

const firstName = "Veronica"
const lastName = "Ndemo"
const veronica = [firstName, lastName, 2023 -  2001, 'Student', friends]
console.log(veronica)

//Exercise
 const calAge = function(birthYear){
    return 2037 - birthYear
 }
 const yearsArr = [1991, 2002, 2010,2018]
 const age1 = calAge(yearsArr[0])
 const age2 = calAge(yearsArr[1])
 const age3 = calAge(yearsArr[years.length -1])
console.log(age1, age2, age3)

const ages = [calAge(yearsArr[0]), calAge(yearsArr[1]), calAge(yearsArr[yearsArr.length -1])]
console.log(ages)
*/
// const  friends = ['Linda', 'Maria', 'Steve']
//  const newLength = friends.push('Max')
//  friends.unshift('Marion')
//  console.log(friends)
//  console.log(newLength)
 
//  //Remove
//  console.log(friends.pop())
//  console.log(friends)

//  friends.shift()
//  console.log(friends)

//  console.log(friends.indexOf('Maria'))
//  console.log(friends.includes('Mercy'))
//  console.log(friends.includes('Linda'))

//  if(friends.includes('Linda')){
//    console.log('You have a friend called Linda')
//  }

//OBJECTS
/*
const veronica = {
   firstName: 'Veronica',
   lastName: 'Ndemo',
   age: 2023 - 2001,
   job: 'Student',
   friends: ['Esther', 'Mercy', 'Pau']
}
console.log(veronica)
console.log(veronica.lastName)
console.log(veronica['lastName'])

const nameKey = 'Name'
console.log(veronica['first' + nameKey])
console.log(veronica['last' + nameKey])

const interestedIn = prompt('What do you want to know about Veronica?Choose between firstName, lastName, age, job, friends')

if(veronica[interestedIn]){
   console.log(veronica[interestedIn])

}else{
   console.log('Wrong request! What do you want to know about Veronica?Choose between firstName, lastName, age, job, friends')
}
veronica.location = 'Kenya'
veronica['twitter'] = '@ndemoveronica'
console.log(veronica)

//Challange 
//veronica has three friends, and her best friend is Esther

console.log(`${veronica.firstName} has ${veronica.friends.length} friends, and her best friend is ${veronica.friends[0]}`)
*/
// const veronica = {
//    firstName: 'Veronica',
//    lastName: 'Ndemo',
//    birthYear: 2001,
//    job: 'Student',
//    friends: ['Esther', 'Mercy', 'Pau'],
//    hasDriversLicence: false,

   // calAge: function(birthYear){
   //    return 2023 - birthYear
   // }

   // calAge: function(){
   //    console.log(this)
   //        return 2023 - this.birthYear
   // //     }
   //  calAge: function(){
   //    this.age = 2023 - this.birthYear; 
   //         return this.age;

   //  },
    //Challange
//Veronica is a 21-year old student, and she has a drivers licence

//     getSummary: function(){
//       return(`${this.firstName} is a ${this.calAge()} year old ${this.job}, and ${this.hasDriversLicence ? "she has a driver's licence" : "has no drivers Licence"}`)

//     }


// // }
// console.log(veronica.calAge()) //dot notation
// // console.log(veronica['calAge'](birthYear)) // bracket notation

// console.log(veronica.age)
// console.log(veronica.getSummary())

