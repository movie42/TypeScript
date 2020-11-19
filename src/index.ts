interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "HYUNSU",
  age: 32,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are a ${person.gender}, you are ${person.age}`;
};

console.log(sayHi(person));

export {};
