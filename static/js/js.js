// function User(uName, uAge, uBalance, uSkills) {
//     var _name = uName
//     this.age = uAge
//     this.balance = uBalance
//     this.skills = uSkills
//     this.getInfo = function() {
//         console.log('Name: ' + _name + ' Age: ' + this.age + ' Balance: ' + this.balance)
//             // document.getElementById('root').innerHTML = this.name + ' ' + this.age + ' ' + this.balance
//     }
//     if (this.age < 18) {
//         console.log('Attention')
//     }
//     this.getName = function() {
//         return _name
//     }
//     this.setName = function(uName) {
//         if (typeof uName === 'string' && uName.length > 2) {
//             _name = uName;
//         } else {
//             console.log('error')
//         }
//     }
// }
// // User.prototype.check = function() {
// //     if (this.age < 18) {
// //         console.log('Too young')
// //     } else {
// //         console.log('Normal young')
// //     }
// // }

// function corp_user(uName, uAge, uBalance, uID) {
//     User.call(this, uName, uAge, uBalance)
//     var _name = uName
//     this.id = uID
//     this.getInfo = function() {
//         console.log('Name: ' + _name + ' Age: ' + this.age + ' Balance: ' + this.balance + ' ID: ' + this.id)

//     }
//     this.getName = function() {
//         return _name
//     }
//     this.setName = function(uName) {
//         if (typeof uName === 'string' && uName.length > 2) {
//             _name = uName;
//         } else {
//             console.log('error')
//         }
//     }
// }
// corp_user.prototype = Object.create(User.prototype)
// const u1 = new User('John', 35, 26750, ['Soft', 'Hard'])
// const u2 = new User('S', 31, 17600)

// const a3 = new corp_user('EEE', 15, 80000, 1)
// a3.setName('Mary')
// console.log(a3.getName())
// a3.getInfo()

class robots {
    id
    name
    isReproduce
    action(act) {
        console.log(this.name + act)
    }
}