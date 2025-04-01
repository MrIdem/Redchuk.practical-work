// Завдання 1 //

function old_recursion(check) {
  return isNaN(check) || check > 150 || 0 > check
}

let old = parseInt(prompt("Скільки вам років?"))

if (old_recursion(old)) {
  do {
    alert("Неправельно введен данні")
    old = parseInt(prompt("Скільки вам років?"))
  } while (old_recursion(old))
}

if (old < 18) {
  alert("Вам заборонено вхід")
} else if (18 <= old && old <= 65) {
  alert("Ласкаво просимо!")
} else if (old > 65) {
  alert("Будь ласка, будьте обережні!")
}

// Завдання 2 // 

function n_recursion(check) {
  return isNaN(check) || 0 > check
}

let n = parseInt(prompt("Введіть число"))

if (n_recursion(n)) {
  do {
    alert("Неправельно введен данні")
    n = parseInt(prompt("Введіть додатнє ціле число"))
  } while (n_recursion(n))
}

let str = ""

for (let i = 2; i <= n; i++) {
   if (i % 2 === 0) {
   str = `${str + i} `
  }
}

console.log(str)

// Завдання 3 //

function f_recursion(check) {
  return isNaN(check) || check % 1 != 0   //Не дорівнює не працює, впринципі похуй, але всеж
}

let a = parseFloat(prompt("Введіть число"))

while(f_recursion(a)) {
  alert("Введіть ціле число");
  a = parseFloat(prompt("Введіть число"));
}

function factorial(x) {
  if (x == 0 || x == 1) {
    return 1
  } else if (x == -1) {
    return -1
  }else if (x < 1) {
    return -x * factorial(x + 1)
  }
  else {
    return x * factorial(x - 1)
  }
}

console.log(factorial(a))

// Завдання 4 //

function num_recursion(check) {
  return isNaN(check)
}

let num1 = prompt("Введіть перше число")

if (num_recursion(num1)) {
  do {
    alert ("Введіть число!")
    num1 = prompt("Введіть перше число")
  } while (num_recursion(num1))
}

let num2 = prompt("Введіть друге число")

if (num_recursion(num2)) {
  do {
    alert ("Введіть число!")
    num2 = prompt("Введіть друге число")
  } while (num_recursion(num2))
}

function op_recursion(check) {
  return check != "+" && check != "-" && check != "*" && check != "/"
}

let operation = prompt("Оберіть операцію (+, -, *, /)")

if (op_recursion(operation)) {
  do {
    alert ("Введіть операцію!")
    operation = prompt("Оберіть операцію (+, -, *, /)")
  } while (op_recursion(operation))
}

switch (operation) {
  case "+":
    alert(`Відповідь: ${parseFloat(num1) + parseFloat(num2)}`)
    break;

  case "-":
    alert(`Відповідь: ${num1 - num2}`)
    break;
    
  case "*":
    alert(`Відповідь: ${num1 * num2}`)
    break;

  case "/":
    if (num2 == 0) {
      alert("На 0 ділити не можна")
    } else {
      alert(`Відповідь: ${num1 / num2}`)
    }
    break;

  default:
    alert("Щось пішло не так...")
    break;
}

// Завдання 5 //

let random_num = (Math.floor(Math.random() * 100) + 1)

function random_recursion(check) {
  return isNaN(check)
}

let user_num = (parseInt(prompt("Відгадай число")))

while(random_recursion(user_num)) {
  alert("Невірно введені дані!")
  user_num = (parseInt(prompt("Введіть число")))
}

function check_num(user, random) {
  return user != random
}

if (check_num(user_num, random_num)) {
  do{
    if(user_num > random_num) {
      alert("Загадане число менше")
      user_num = (parseInt(prompt("Спробуйте ще раз")))
    } else {
      alert("Загадане число більше")
      user_num = (parseInt(prompt("Спробуйте ще раз")))
    }
  } while(check_num(user_num, random_num))
  alert("Вітаємо! Ви вгадали число!")
} else {
  alert("Вітаємо! Ви вгадали число!")
}

// Додаткове завдання //

function gcd_recursion(check) {
  return isNaN(check)
}

let gcd_num1 = parseInt(prompt("Введіть перше число"))

while(gcd_recursion(gcd_num1)) {
  alert("Невірно введені дані!")
  gcd_num1 = parseInt(prompt("Введіть перше число"))
}

let gcd_num2 = parseInt(prompt("Введіть друге число"))

while(gcd_recursion(gcd_num2)) {
  alert("Невірно введені дані!")
  gcd_num2 = parseInt(prompt("Введіть друге число"))
}

function gcd(a, b) {
  while (b != 0) {
      let r = b
      b = a % b
      a = r
  }
  return a
}

console.log(`НСД(${gcd_num1}, ${gcd_num2}) = ${gcd(gcd_num1, gcd_num2)}`)