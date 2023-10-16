"use strict";

// Задание 1
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Задание 2
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter(counter) {
  let num = counter;
  return {
    increment() {
      num++;
    },
    decrement() {
      num--;
    },
    getValue() {
      return num;
    },
  };
}

const calculate = createCounter(5);
calculate.increment();
console.log(calculate.getValue());

calculate.decrement();
calculate.decrement();
console.log(calculate.getValue());

// Задание 3
// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }

  const childrenElements = rootElement.children;
  // console.log(childrenElements);
  for (let i = 0; i < childrenElements.length; i++) {
    const element = findElementByClass(childrenElements[i], className);
    if (element) {
      return element;
    }
    return null;
  }
}

const rootElement = document.querySelector(".product");
const targetElement = findElementByClass(rootElement, "product__text");
console.log(targetElement);
