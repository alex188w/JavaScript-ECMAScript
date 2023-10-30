"use stict";
// Задание 1
// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const person = {
  name: "John",
  age: 25,
  gender: "male",

  introduce() {
    console.log(
      `My name is ${this.name}, I'm ${this.age},\ years old i identifity ${this.gender}`
    );
    // "\" - чтобы все было одной строкой
  },

  changeName(name) {
    this.name = name;
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);
person.introduce();
person.changeName("Алексей");
person.introduce();

// Задание 2
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const animal = {
  name: "Rex",
  eat(product1, product2) {
    console.log(`${this.name} eating ${product1}, ${product2}`);
  },
};

const dog = {
  name: "Sharik",
  bark() {
    console.log(`${this.name} is barking`);
  },
  //   eat: animal.eat,
};

dog.bark();
// dog.eat();

animal.eat.call(dog, "apple", "Salt");
animal.eat.apply(dog, ["apple", "Salt"]);
// const func = animal.eat.bind(dog, "apple", "Salt");
const func = animal.eat.bind(dog);
func("apple", "Salt");

// Задание 3
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

function checkBalance(balance) {
  if (!Number.isFinite(balance)) {
    throw new Error("Must be a number");
  }
  if (balance < 0) {
    throw new Error("Must be a positive number");
  }
  if ((balance * 100) % 1 !== 0) {
    throw new Error("Must be 2 digits after dot");
  }
}

class BankAccount {
  static bankName = "GBank";
  constructor(accountNumber, balance) {
    if (accountNumber.length != 10) {
      throw new Error("Wrong account number length");
    }
    checkBalance(balance);
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    checkBalance(amount);
    this.balance += amount;
  }

  withdraw(amount) {
    checkBalance(amount);
    if (this.balance < amount) {
      throw new Error(`Insufficient funds in account ${this.accountNumber}`);
    }
    this.balance -= amount;
  }

  printBalance() {
    console.log(
      `${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`
    );
  }
}

const account1 = new BankAccount("1234567890", 1000.111);

// Вывод: Deposited 500 into account 1234567890.
const account2 = new BankAccount("1234567890", 1000);
account2.deposit(500);
account2.withdraw(200);
// account2.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
// account2.withdraw(-200); // Вывод: Wrong deposit amount, must be a positive number
// account2.withdraw(-500); // Вывод: Wrong deposit amount, must be a positive number
// account2.deposit(Infinity); // Вывод: Wrong deposit amount, must be a positive number
account2.printBalance(); // Вывод: GBank accaunt "1234567890" balance: 1300
