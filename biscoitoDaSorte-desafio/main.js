const brokenCookie = document.querySelector(".broken-cookie") 
const closedCookie = document.querySelector(".closed-cookie")
const buttonPhrase = document.querySelector('button')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')


const growingAnimate = [
  {transform: 'scaleX(0) translateY(10rem)'},
  {transform: 'scaleX(1) translateY(0rem)'}
]
const animateTiming = {
  duration: 500,
}

let messageList = [
  firstMessage = `Se alguém está tão cansado 
 que não possa te dar um sorriso, deixa-lhe o teu.`,
  secondMessage = `A vida trará coisas boas se tiver paciência.`,
  thirdMessage = `Não compense na ira o que lhe falta na razão.`
]

 randomItem = Math.floor(Math.random() * messageList.length)

function growingPhrase () {
  document.querySelector('p').animate(growingAnimate, animateTiming)
}

function toggleScreen () {
  closedCookie.classList.toggle("hide")
  brokenCookie.classList.toggle("hide")
}

function textStyle () {
  h1.innerText = "Aqui está sua sorte de hoje:"
  p.innerText = messageList[randomItem]
  p.style.fontFamily = 'Dancing Script'
  p.style.fontSize = '2.4rem'
  p.style.background = '#E4EDF1'
  p.style.boxShadow = '2px 2px 2px rgba(85, 85, 85, 0.5)'
  p.style.color = '#000000'
}

function changeText() {
  if (h1.innerText == "Aqui está sua sorte de hoje:") {
    h1.innerText = "Qual é a sua sorte de hoje?"
    p.innerText = "Abra o biscoito e descubra!"
    p.style = 'none'
  }
  
}
function anotherPhrase () {
  toggleScreen()
  changeText()
  randomItem = Math.floor(Math.random() * messageList.length)
}

function cookieClick() {
  toggleScreen()
  textStyle()
  growingPhrase()
}

closedCookie.addEventListener('click', cookieClick)
buttonPhrase.addEventListener('click', anotherPhrase)