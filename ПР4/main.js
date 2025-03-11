// Блок 1 //

let div1 = document.createElement("div")
div1.classList = "input_div"
document.body.appendChild(div1)

// Вивод текстового поля //

let input = document.createElement("input")
input.setAttribute("type", "Text")
input.classList = "user_text"
document.querySelector(".input_div").appendChild(input)

// Вивод кнопики "ввести" //

let button = document.createElement("button")
button.textContent = "Ввести"
document.querySelector(".input_div").appendChild(button)

// Блок 2 //

let div2 = document.createElement("div")
div2.classList = "ul_div"
document.body.appendChild(div2)

// Вивод кнопики "відсортувати" //

let sort_button = document.createElement("button")
sort_button.textContent = "Відсортувати"
document.querySelector(".ul_div").appendChild(sort_button)

// Вивод списка //

let ul = document.createElement("ul")
ul.classList = "wrapper"
document.querySelector(".ul_div").appendChild(ul)

// Збереження списку //

function save() {
  let array_item = Array.from(document.querySelectorAll(".cart_wrapper")).map(li => li.textContent)
  localStorage.setItem("list", JSON.stringify(array_item))
}
//// Список ////

// Додати елемент списку //

function add_item() {
  if (document.querySelector(".user_text").value == "") {
    alert("Введіть данні")
  } else {
    let new_li = document.createElement("li");
    new_li.classList = "cart_wrapper"
    new_li.textContent = document.querySelector(".user_text").value;
    document.querySelector(".wrapper").appendChild(new_li);
    document.querySelector(".user_text").value = ""
    save()
  }
}

button.addEventListener("click", add_item)

// Видалити елемент списку //

document.querySelector(".wrapper").addEventListener("click", function(event) {
  if (event.target.querySelectorAll(".cart_wrapper")) {
    event.target.remove()
    save()
  }
})

// Сортування //

function sort_item() {
  let array = Array.from(document.querySelectorAll(".cart_wrapper"))
  array.sort((a, b) => a.textContent.localeCompare(b.textContent))
  document.querySelectorAll(".CART_wrapper").innerHTML = ""
  array.forEach(array => document.querySelector(".wrapper").appendChild(array))
  save()
}

sort_button.addEventListener("click", sort_item)

// Завантаження списку //

function load() {
  let safe_array_item = JSON.parse(localStorage.getItem("list")) || []
  safe_array_item.forEach(safe_array_item => {
    let load_li = document.createElement("li")
    load_li.classList = "cart_wrapper"
    load_li.textContent = safe_array_item
    document.querySelector(".wrapper").appendChild(load_li)
  })
}

load()