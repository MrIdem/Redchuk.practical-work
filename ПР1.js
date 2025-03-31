// Завдання 1 //

// Пункт 1 //

let a = 1
let b = 1.1
let c = "2"
let d = true

// Пункт 2 //

typeof(a)
typeof(b)
typeof(c)
typeof(d)

// Пункт 3 //

console.log(a + c)
console.log(a + parseInt(c))
console.log(parseInt(d))

// Пункт 4 //

let object = {
  a : 1,
  b : 1.1,
  c : "2",
  d : true,
}

console.log(JSON.stringify(object, null, 2))


// Завдання 2 //

// Пункт 1 //

let num1 = parseFloat(prompt("Введіть перше число"))
let num2 = parseFloat(prompt("Введіть друге число"))
let num3 = parseFloat(prompt("Введіть третє число"))

let arf = `Середнє арифметичне цих чисел: ${(num1 + num2 + num3) / 3}`

console.log(arf)

// Пункт 2 //

let abs1 = `Модуль першого числа: ${Math.abs(num1)}`
let up1 = `Округлення першого числа в більшу сторону: ${Math.ceil(num1)}`
let down1 = `Округлення першого числа в меншу сторону: ${Math.floor(num1)}`
let pow1 = `Перше число в кубі: ${Math.pow(num1, 3)}`

let abs2 = `Модуль другого числа: ${Math.abs(num2)}`
let up2 = `Округлення другого числа в більшу сторону: ${Math.ceil(num2)}`
let down2 = `Округлення другого числа в меншу сторону: ${Math.floor(num2)}`
let pow2 = `Друге число в кубі: ${Math.pow(num2, 3)}`

let abs3 = `Модуль третього числа: ${Math.abs(num3)}`
let up3 = `Округлення третього числа в більшу сторону: ${Math.ceil(num3)}`
let down3 = `Округлення третього числа в меншу сторону: ${Math.floor(num3)}`
let pow3 = `Третє число в кубі: ${Math.pow(num3, 3)}`

console.log(abs1)
console.log(up1)
console.log(down1)
console.log(pow1)

console.log(abs2)
console.log(up2)
console.log(down2)
console.log(pow2)

console.log(abs3)
console.log(up3)
console.log(down3)
console.log(pow3)

// Пункт 3 //

function da(number, five) {
  return number % five === 0 ? `Число ${number} ділеться на ${five} без остачі` : `Число ${number} не ділеться на ${five} без остачі`
}

console.log(da(abs1, 5))
console.log(da(up1, 5))
console.log(da(down1, 5))
console.log(da(pow1, 5))

console.log(da(abs2, 5))
console.log(da(up2, 5))
console.log(da(down2, 5))
console.log(da(pow2, 5))

console.log(da(abs3, 5))
console.log(da(up3, 5))
console.log(da(down3, 5))
console.log(da(pow3, 5))

// Пункт 4 //

function triangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a ? `Трикутник з такими сторонами, існує` : `Трикутника з такими сторонами, не існує`
}

console.log(triangle(num1, num2, num3))


// Завдання 3 //

// Пункт 1 //

let a2 = parseFloat(prompt("Введіть перше значення"))
let b2 = parseFloat(prompt("Введіть друге значення"))
let c2 = parseFloat(prompt("Введіть третє значення"))

console.log(`Найбільше число: ${Math.max(a2, b2, c2)}`)
console.log(`Найменше число: ${Math.min(a2, b2, c2)}`)

// Пункт 2 //

function even(number, two) {
  return number % two === 0
}

if(even(a2, 2) == true) {
  console.log("Серед значень є парне")
} else if(even(b2, 2) == true) {
  console.log("Серед значень є парне")
} else if(even(c2, 2) == true) {
  console.log("Серед значень є парне")
} else {
  console.log("Парних значень немає")
}

// Пункт 3 //

function bool(a, b , c) {
  return a > b && b < c ? true : false
}

console.log(bool(a2, b2, c2))

// Пункт 4 //

function simple_recursion(check) {
  return isNaN(check) || check <= 1
}

let simple_num = parseInt(prompt("І ще одне ціле число, яке більше за 1"))

if (simple_recursion(simple_num) === true) {
do {
  alert("Не вірно введені дані")
  simple_num = parseInt(prompt("Введіть ціле число, яке білше за 1"))
} while (simple_recursion(simple_num))
}

function primality(n) {
  for(let i = 2; i < n; i++) {
     if(n % i === 0) return false;
  }
  return n > 1;
 }

 if (primality(simple_num)) {
  console.log(`Число ${simple_num} просте`)
} else {
  console.log(`Число ${simple_num} не є простим`)
}

// Завдання 4 //

// Пункт 1 //

let name = prompt("Ваше ім'я?")

function recursion(check) {
  return isNaN(check) || check < 1800 || new Date().getFullYear() < check
}

let born = parseInt(prompt("Ваш рік народження?"))

if (recursion(born) === true) {
do {
  alert("Неправельно введено рік народження")
  born = parseInt(prompt("Ваш рік народження?"))
} while (recursion(born))
} else {
  console.log(born)
}

let city = prompt("Де ви проживаєте?")

// Пункт 2 //

let year = new Date()

let user_old = year.getFullYear() - born

console.log(`Вік користувача: ${user_old}`)

// Пункт 3 //

if (user_old <= 12) {
  console.log("Користувач: дитина")
} else if (user_old > 12 && user_old <= 17) {
  console.log("Користувач: підліток")
} else if (user_old > 17 && user_old < 40) {
  console.log("Користувач: дорослий")
} else {
  console.log("Користувач: Літня людина")
}

// Пункт 4 //

if (city == "Київ") {
  console.log("Користувач проживає в столиці України")
} else {
  console.log("Користувач проживає не в столиці України")
}