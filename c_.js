//parent classe
// class Animal{
//     constructor(name, weight) {
//         this.name = name
//         this.weight = weight
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     sleep() {
//         return `${this.name} is sleeping`
//     }
//     wake() {
//         return `${this.name} is waking`
//     }
// }
// //creates child class
//     class Gorilla extends Animal {
//         constructor(name, weight){
//             super(name,weight)
//         }
//     //activity

//         climbTrees(){
//             return `${this.name}is climbing trees`

//         }
//         poundChest(){
//             return `${this.name}is pounding chest`

//         }
//         showViugor(){
//             return `${this.name}is ${this.poundChest}`

//         }
//         dailyRoutine(){
//             return `${super.wake()} ${this.poundChest()} 
//             ${super.climbTrees()} ${super.poundChet()}`

//         }
       
//     }
// function display(content){
//     console.log(content)
// }
// const gorilla = new Gorilla('Mr G', `200p`)
// display(Gorilla.poundChest())
// display(Gorilla.showVigor())
// display(Gorilla.dailyRoutine())

/**
 * Traditional JavaScript Classes
 */
    
//  function Animal(name, weight){
//      this.name = name
//      this.weight = weight
//  }
//  Animal.prototype.eat = function(){
//      return `${this.name} is eating`
//  }
//  Animal.prototype.wake = function(){
//     return `${this.name} is waking`
// }

// Animal.prototype.sleep = function(){
//     return `${this.name} is sleep`
// }

// function Gorilla(name, weight){
//     Animal.call(this, name, weight)
// }

// Gorilla.protoype = Object.create(Animal.prototype)

// Gorilla.prototype.constructor = Gorilla

// Gorilla.prototype.climbTrees = function(){
// return `${this.name} is climbing trees`
// }
// Gorilla.prototype.poundChest= function(){
//     return `${this.name} pound chest`  
// }
// Gorilla.prototype.showVigor = function(){
//     return `${Animal.prototype.call(this)} ${this.poundChest}!`
// }
// Gorilla.prototype.dailyRoutine  = function (){
//     return `${Animal.prototype.wakeUp.call(this)} ${this.poundChest} ${Animal.prototype.call(this)}`
// }

// const gorilla = new Gorilla("mrG", "200p")
// display(gorilla.poundChest())
// display(gorilla.climbTrees())
// display(gorilla.showVigor())
