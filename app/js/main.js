const header = document.getElementById('header')

header.style.cssText = 'background-color: yellowgreen'

const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

promise.then(res => console.log(3))
console.log(4)

const arr = Array.of(1,2,3)
console.log(arr);