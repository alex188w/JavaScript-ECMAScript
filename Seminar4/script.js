"use strict";
 
// // 1. Создайте функцию delayedMessage(message, delay),
// // которая принимает аргументы message (строка) и delay
// // (число). Функция должна выводить заданное сообщение в
// // консоль через указанную задержку.
 
// // 2. Вызовите функцию delayedMessage() три раза с разными
// // сообщениями и задержками.
 
// // 3. После вызова всех функций delayedMessage(), добавьте
// // сообщение вида "Конец программы" с помощью
// // console.log().
 
// let count = 0;
// function delayedMessage(message, delay) {
// 	count++;
// 	setTimeout(function () {
// 		console.log(message);
// 		count--;
// 		if (count === 0) {
// 			console.log("Конец программы");
// 		}
// 	}, delay);
// }
 
// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);
 
// Ожидаемый результат:
// "Сообщение 2"
// "Сообщение 1"
// "Сообщение 3"
// "Конец программы"
 
// У вас есть список задач, которые необходимо выполнить в определенном
// порядке. Каждая задача должна быть выполнена через определенный
// промежуток времени, заданный в миллисекундах. Вам необходимо написать
// функцию, которая принимает список задач и интервал времени, а затем
// выполняет каждую задачу через определенный промежуток времени.
// Нельзя использовать setTimeout, выставляя сразу все задачи в очередь.
 
// const tasks = [
//   {name: 'task1', time: 1000}, // выполнится через 1 сек.
//   {name: 'task2', time: 2000}, // выполнится через 3 сек.
//   {name: 'task3', time: 4000}, // выполнится через 7 сек.
// ];
 
// let i = 0;
 
// function f(params) {
// 	const task = params[i];
//   setTimeout(function () {
//     console.log(task.name);
// 		i++;
// 		if (i < params.length) {
// 			f(params);
//     }
//   }, task.time);
// }
 
// f(tasks);
 
//============================================================================================================================
 
// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// Задание 2 продолжение
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().
// 6. Выведите в консоль слово "привет", после вызова функции.
// Дополнительно:
// а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип
// запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите,
// что изменится, объясните почему. Какой вариант чаще используется/лучше?
// б) Переписать на fetch с обработкой ошибок.
 
// API: https://jsonplaceholder.typicode.com/users
// 
// с помощью new XMLHttpRequest()
// function loadData(url) {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open("GET", url, true);
//     // true - ассинхронный запуск функции (можно не ставить - будет по умолчанию); если поставить false - будет синхронный
// 	xhr.onload = function () {
// 		if (xhr.status != 200) {
// 			console.log(`Error ${xhr.status}: ${xhr.statusText}`);
// 		} else {
// 			console.log(xhr.responseText);
// 		}
// 	};
// 	xhr.send();
// }
 
// loadData("https://jsonplaceholder.typicode.com/users");
// console.log("привет");
 
// через fetch(url)
// function loadData(url) {
//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("ОШИБКА!!!111");
//       }
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
 
// loadData("https://official-joke-api.appspot.com/random_ten"); 
// fetch(url) => new Promise(resolve(response)) => then(response => response.json) => then(response (в формате JSON) => console.log(response);

// через async - await
// async function loadData(url) {
// 	try {
// 		const response = await fetch(url);
// 		if (response.ok) {
// 			console.log(await response.json());
// 		} else {
// 			throw new Error("ERRORRRR");
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// loadData("https://official-joke-api.appspot.com/random_ten");
 
// через async - await - без асинхронной функции
async function loadData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Error status ${response.status}`);
}
// loadData("https://official-joke-api.appspot.com/random_ten");
// // выводом будут промис

// // через .then короткая запись
// loadData("https://jsonplaceholder.typicode.com/users").then(f => {
// 	console.log(f);
// }).catch(e => {
// 	console.log(e)
// })
 
async function data() {
  try {
    const dataLoad = await loadData(
      "https://jsonplaceholder.typicode.com/users"
    );
    dataLoad.sort(function (a, b) { // сортировка полученных данных по возрастанию имени (users)
      return a.name.localeCompare(b.name); // сравнение строк
    })
    // вывод отсортированного массива в консоль
    console.log(dataLoad);
    // вывод отсортированного массива в браузер
    const ulElement = document.querySelector(".ul");
    ulElement.innerHTML = dataLoad
      .map(function (user) {
        return `<li>Name: ${user.name}</li>`;
      })
      .join("");
    //   или так - по одному элементу
    dataLoad.forEach((e) => {
    	const liElement = document.createElement("li");
    	liElement.innerHTML = `
    	name: ${e.name}
    	`;    
    });
  } catch (err) {
    console.log(err);
  }
} 
data();