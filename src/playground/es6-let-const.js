var nameVar = 'Lily';
var nameVar = 'San'; // ES5 var: function-scoped, allows reassign and redeclare, not standard, bug-prone
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'July'; // ES6 let: only allows reassign, cannot redeclare, standard
console.log('nameLet', nameLet);

const nameConst = 'Fay'; // ES6 const: block-scoped, cannot redeclare and reassign  
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Rusty';
    return petName;
}

console.log(getPetName());
// console.log(petName);

// block scoping

const fullName = 'Ann Lee';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);