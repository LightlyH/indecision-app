// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

// const user = {
//     name: 'Lily',
//     cities: ['Beijing', 'Seattle', 'Paris'],
//     printPlacesLived: function() {
//         // console.log(this.name);
//         // console.log(this.cities);
//         const that = this;

//         this.cities.forEach(function(city) {
//             console.log(that.name + ' has lived in ' + city);
//         });

//     }
// };

// const user = {
//     name: 'Lily',
//     cities: ['Beijing', 'Seattle', 'Paris'],
//     printPlacesLived() {
//         this.cities.forEach(city => {
//             console.log(this.name + ' has lived in ' + city);
//         });

//     }
// };

const user = {
    name: 'Lily',
    cities: ['Beijing', 'Seattle', 'Paris'],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [4, 7, 11],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy); 
    }
};

console.log(multiplier.multiply());