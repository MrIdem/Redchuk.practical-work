let arf = []
arf.length = 5


for (let i = 0; i < arf.length; i++) {
  const random = Math.floor(Math.random() * 5)
  arf[i] = random
}
  
console.log(arf)

let array_arf = (arf[0] + arf[1] + arf[2] + arf[3] + arf[4]) / arf.length
console.log(`Середнє арифметичне матива: ${array_arf}`)

let max = Math.max(...arf)
console.log(`Максимальне значення в масиві: ${max}`)
let min = Math.min(...arf)
console.log(`Мінімальне значення в масиві: ${min}`)

arf.sort((a, b) => a - b)
console.log(`Відсортований мавсив: ${arf}`)