const formSignin = document.querySelector('#signin')
const formSignup = document.querySelector('#signup')
const btnColor = document.querySelector('.btnColor')

document.querySelector('.btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
    btnColor.style.background = "linear-gradient(to right, #5956e9, #a963f8)"
})

document.querySelector('.btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
    btnColor.style.background = "linear-gradient(to left, #5956e9, #a963f8)"
})



