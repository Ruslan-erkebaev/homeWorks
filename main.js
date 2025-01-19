// Задача 1
// let num = 0;
// while (num <= 100) {
//     console.log(num);
//   num++;
// }

// Задача 2
// let num = 0;
// while (num <= 100) {
//   if (num % 2 === 0) console.log(num);
//   num++;
// }

// Задача 3
// let num = 0;
// let sum = 0;
// while (num <= 100) {
//   num++;
//   console.log(sum);
//   if (num % 2 === 0)  {
//     sum += num;
//   }
// }
// Консоль лог можно и сюда в конец написать тогда будет виден только конечный итог :)

// Задача 4
// let game = "Duolingo green";
// let counter = 0;
// let searchChar = prompt("Введите букву");
// while (counter <= game.length) {
//   const currentChar = game.charAt(counter);
//   if (searchChar === currentChar) {
//     alert("Есть такая буква");
//   } else {
//     alert("Нет такой буквы");
//   }
//   counter++;
// }

// Задача 5
// let userName = "Helo";
// let counter = 0;
// let userNumber=userName.length
// while (counter <= userNumber) {
//   console.log(userName.charAt(userNumber));
//   userNumber--;
// }

// Задача 6
let string = ``;
let count = 0;
while (count < 10) {
  string = string + "*";
  count++;
  console.log(string);
}
