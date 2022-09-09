// array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// const apple = [1, 2, 3, 4, 5];

// const book = apple;

// book[4] = 99;

// console.log(apple, book);

// array method 1
const array1 = players.slice();
console.log(array1);
array1[1] = "apple";
console.log("method1", array1, players);

// array method 2
const array2 = [].concat(players);
array2[2] = "apple";
console.log("method2", array2, players);

// array method 3
const array3 = [...players];
array3[3] = "apple";
console.log("method3", array3, players);

// array method 4
const array4 = Array.from(players);
array4[0] = "apple";
console.log("method4", array4, players);

// object method 1
const object1 = Object.assign({}, person, { number: 99, age: 12 });

console.log("object1", object1, person);

// object method 2
const object2 = { ...person };
object2.age = 10;
console.log("object2", person, object2);

// 用...的方式還是只能複製一層
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes.social);

const aaa = { ...wes };
aaa.social.twitter = 12;

console.log(wes);

// object method 3

const object3 = JSON.parse(JSON.stringify(wes));
object3.social.twitter = 24;

console.log("object3", wes, object3);
