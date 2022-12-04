// var z = "I dont know"
// function greet(name){
//     console.log(this.z)
//     function somthing(anotherName){
//         z = "let see than"
//         console.log(name + " " + anotherName + " ")
//     }

// const { Promise } = require("mongoose");

//     return somthing
// }

// var sayHi = greet("Refael")
// console.log(sayHi)
// sayHi("want a job ")

// {
// }
// var x = "noice"
// console.log(x == this.x)
// console.log()

var object = () => {
    a = 5
    b = 6
    return function aroma(){
      const a = 10
      return () => {
          console.log(this.a + this.b)
        }
    }
}
console.log(object)
console.log(object())
console.log(object()())
object()()()

// console.log(globalThis === this)

// let a1 = new Promise((resolve, reject) => {
//     resolve('a1 success')
// })
// let a2 = new Promise((resolve, reject) => {
//     reject('a2 faild')
//     resolve('a2 success')
// })
// let a3 = new Promise((resolve, reject) => {
//     reject('a3 faild')
//     resolve('a3 success')
// })

// Promise.all([
//     a1,
//     a2,
//     a3,
// ]).then((messages) => {
//     console.log(messages)
// }).catch((err) => {
//     console.log(err)
// })
// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
//   console.log(person1)
//   console.log(person.fullName.call(person1))
//   console.log(person.fullName(person1))
//   let x = myFunction();            

//   function myFunction() {
//     return this;
//   }
//   console.log(x)