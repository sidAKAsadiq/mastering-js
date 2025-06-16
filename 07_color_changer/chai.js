const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')


buttons.forEach((button)=>{
// console.log(button)
button.addEventListener('click' , (event)=>{
  console.log(event)
  console.log(event.target)
  console.log(event.target.id)
  body.style.backgroundColor = event.target.id
})
})