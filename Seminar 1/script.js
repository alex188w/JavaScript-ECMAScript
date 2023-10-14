"use strict";

// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

// function removeDuplicates(...arr) {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// }

// или так
function removeDuplicates(...arr) {
  return [...new Set(arr).values()];
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5, 2, 1));

// Задание 2 (тайминг 25 минут)
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(nums) {
  return nums.filter((item) => {
    return item % 2 === 0;
  });
}
console.log(getEvenNumbers([1, 2, 3, 4, 5]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(nums) {
  return nums.reduce((sum, cur) => (sum += cur), 0) / nums.length;
}

console.log(calculateAverage([1, 2, 3]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
}

console.log(capitalizeFirstLetter("которая принимает строку"));

// Задание 3 (тайминг 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
  let num = initialValue;
  return {
    add(val) {
      num += val;
    },
    subtract(val) {
      num -= val;
    },
    getValue() {
      return num;
    },
  };
}

const calculate = createCalculator(5);
calculate.add(2); 
// будет возвращать undefined
console.log(calculate.getValue());
// будет возвращать число
calculate.subtract(4);
// будет возвращать undefined
console.log(calculate.getValue());
// будет возвращать число

// Задание 4 (тайминг 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет возвращать
// приветствие с использованием этого имени.

// Пример использования:
// const greeting = createGreeting('John');
// console.log(greeting()); // "Hello, John!"

function createGreeting(userName) {
  return function () {
    return `Привет ${userName}`;
  };
}

const greeting = createGreeting("Алексей");
console.log(greeting());

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает минимальную длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина больше или равна заданной длине,
// в противном случае - false.

// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // true
// console.log(isPasswordValid('secret')); // false

function createPasswordChecker(passwordNum) {
  // return function (str) {
  //   return str.length >= passwordNum;
  // };
  return (str) => str.length >= passwordNum;
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password")); // true
console.log(isPasswordValid("secret")); // false

// Задание 6 (тайминг 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.

// // Пример использования:
// console.log(sumDigits(123)); // 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(positiveNum) {
  if (positiveNum < 10) {
    return positiveNum;
  }
  return (positiveNum % 10) + sumDigits(Math.floor(positiveNum / 10));
}
console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

/*
Новый фильм "Мстители" только что вышел! В кассе кинотеатра много людей,
стоящих в огромной очереди. Каждый из них имеет по одной купюре, номиналом
100, 50 или 25 $.
Билет "Мстители" стоит 25 $.
Вася сейчас работает клерком. Он хочет продать билет каждому человеку в этой
очереди.
Может ли Вася продать билет каждому человеку и дать сдачу, если у него
изначально нет денег и он продает билеты строго в порядке очереди?
Верните YES, если Вася сможет продать билет каждому человеку и дать сдачу.
В противном случае верните NO.
*/
function tickets(people) {
  // [25, 100]
  const val = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (const item of people) {
    if (item === 25) {
      val[25] += 1;
    } else if (item === 50 && val[25] != 0) {
      val[50] += 1;
      val[25] -= 1;
    } else if (item === 100 && val[50] >= 1 && val[25] >= 1) {
      val[50] -= 1;
      val[25] -= 1;
      val[100] += 1;
    } else if (item === 100 && val[25] >= 3) {
      val[25] -= 3;
      val[100] += 1;
    } else {
      return "NO";
    }
  }
  return "YES";
}

// console.log(tickets([25, 25, 50])); // "YES"
// console.log(tickets([25, 100])); // "NO" (У Васи нет сдачи со 100)
// console.log(tickets([25, 25, 50, 50, 100])); // "NO"
// console.log(tickets([25, 25, 25, 25, 25, 100, 100])); // "NO"
// console.log(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100])); // "YES"
// console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100])); // "YES"
// console.log(
//   tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
// ); // => "NO"
// console.log(tickets([25, 25, 50])); // "YES"
// console.log(tickets([25, 100])); // "NO"
// console.log(tickets([25, 25, 50, 50, 100])); // "NO"
// console.log(tickets([25, 50, 25, 100])); // "YES"
// console.log(tickets([25, 50, 50])); // "NO"
// console.log(tickets([25, 25, 25, 100])); // "YES"
// console.log(tickets([25, 25, 25, 25, 25, 50, 100])); // "YES"
// console.log(tickets([25, 100])); // "NO"

/*
Напишите функцию cakes(recipe, ingredients), которая принимает рецепт (объект)
и доступные ингредиенты (также объект) и возвращает максимальное количество
пирожных, которое можно испечь (целое число). Для простоты не существует единиц
измерения количества (например, 1 фунт муки или 200 г сахара - это просто 1 или
200). Ингредиенты, которых нет в предметах, можно рассматривать как 0.
*/

function cakes(recipe, ingredients) {
  return Math.min(
    ...Object.keys(recipe).map((ingredient) => {
      return ingredients[ingredient]
        ? Math.floor(ingredients[ingredient] / recipe[ingredient])
        : 0;
    })
  );
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // 2

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// ); // 0
