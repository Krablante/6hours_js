const names = ["Каа", "Маугли", "Балу", "Багира"];

/* names.push("Шерхан"); */
/* names.unshift("Шерхан"); */

/* const characterName = names.shift(); */
/* const characterName = names.pop();
console.log("Names:", names, characterName); */

// делает реверс массива с изминением массива
/* console.log(names.reverse()); */

// делает реверс массив без изменений
/* console.log(names.toReversed()); */
// То же самое, но с сортировкой
/* console.log(names.toSorted()); */

// Удаление (или замена как я понял) выбранных элементов массива
/* console.log(names.splice(2, 1)); */
// То же самое, но не меняет первоначальный массив
/* console.log(names.toSpliced(2, 1)) */
/* console.log(names); */

const mainCharacter = "Маугли"
const index = names.indexOf(mainCharacter);
//console.log(index);
const newNames = names.with(index, "Маугли сын Багиры");
console.log(newNames);
console.log(names);

/* console.log(names[index]);
names[index] = "Маугли сын Барбары"
console.log(names);
 */
/* 
const capitalNames = names.map((name) => {
   
})
console.log(capitalNames); */

//console.log((names.includes('Балу')));
//console.log(names.indexOf('Балу') !== -1);

const people = [
  { name: "Лалалу", budget: 5000 },
  { name: "Маугли", budget: 12000 },
  { name: "Балу", budget: 9000 },
  { name: "Багира", budget: 7000 },
]

/* Так делать НЕ нужно!
let findedPerson

for (let person of people) {
  if (person.budget === 9000) {
    findedPerson = person
  }
} */


/* const findedPerson = people.find((person) => {
  return person.budget === 9000
  }) */

/* const finded = people.find((p) => p.budget == 9000);
console.log(people.with(finded, 42));  */

/* let richBudget = 0

const filtered = people.filter((person) => {
  return person.budget > 7500
})
filtered.forEach((person) => {
  richBudhet += person.budget
  })
console.log(richBudget); */


/* const sumBudget = people.filter((person) => person.budget > 8000).map((person) => person.budget).reduce((acc, person) => acc + person, 0);
 */

/* const byBudget = (p) => p.budget > 8000
const pickBudget = (person) => person.budget

const sumBudget = people.filter(byBudget).map(pickBudget).reduce((acc, person) => acc + person, 0);

console.log(sumBudget); */


const string = "Дарова, сегодня у нас на канале..."
const reversed = string.split("").toReversed().join("");
console.log(reversed);