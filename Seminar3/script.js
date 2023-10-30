"use strict";
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
  const prots = [];
  // утсаревший метод
  // let currentProto1 = obj.__proto__;
  // или так
  let currentProto = Object.getPrototypeOf(obj);

  while (currentProto != null) {
    prots.push(currentProto);
    currentProto = Object.getPrototypeOf(currentProto);
  }
  return prots;
}
const arr = [0, 1, 2, 3];
console.log(getPrototypeChain(arr));

// Object.setPrototypeOf(person1, animal);

// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // "Меня зовут John и мне 25 лет."

function Person(name, age) {
  // 'new' creates this = {}
  // this.__proto__ = Person.prototype
  this.name = name;
  this.age = age;
  // return this
}
Person.prototype.introduce = function () {
  console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
};

console.log(Person);

// https://youtu.be/Su9Gml6xUUU
const person1 = new Person("John", 25);
console.log(person1);
person1.introduce(); // person1.introduce.call(context = person1)

// person1.age = person1.age + 1;

// person1.introduce();

const person2 = new Person("Bob", 28);
console.log(person1);
person2.introduce();

// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму.
// 3. getBalance(): возвращает текущий баланс счета.

// В случае неверно переданных значений, либо невозможности провести
// операцию, должны выводиться соответсвующие сообщения.

function bankAccountFactory() {
  function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };
  BankAccount.prototype.getBalance = function () {
    return this.balance;
  };
  return BankAccount;
}

const BankAccount = bankAccountFactory();
const account1 = new BankAccount("счет 1", 115);
console.log(account1);
account1.deposit(20);
console.log(account1);
account1.withdraw(50);
console.log(account1);
console.log(account1.getBalance());

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.

// Создайте класс Dog, который наследуется от класса Animal. Для
// класса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// Пример использования:
// const animal1 = new Animal("Животное");
// animal1.speak(); // "Животное издает звук."
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // "Бобик издает звук."
// console.log(dog1.breed); // "Дворняжка"
// dog1.fetch(); // "Бобик принес мяч."

class Animal {
  #name; // private field
  constructor(name) {
    this.#name = name;
  }
  speak() {
    console.log(`Животное ${this.#name} издает звук`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  fetch() {
    console.log(`Собака ${this.name} породы ${this.breed} принесла мяч.`);
  }
  // speak() {
  //   console.log(`Собака ${this.name} издает звук Гав!!`);
  // }
}

const animal = new Animal("медуза");
const dog = new Dog("Шарик", "всех пород");
animal.speak();
dog.speak();
dog.fetch();
