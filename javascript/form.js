const form = document.getElementById('form')

// progress bar
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')

// first question items
const firstQuestion = document.querySelector('.first-question')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
const noResponse = document.getElementById('no-response')
const yesResponse = document.getElementById('yes-response')
const changedMind = document.querySelector('.changed-mind')
const ofCourse = document.getElementById('of-course')

no.addEventListener('click', function() {
  firstQuestion.style.display = 'none'
  noResponse.classList.toggle('no-response')
  noResponse.innerHTML = 'Thank you for your time.'
  changedMind.style.display = 'flex'
})

yes.addEventListener('click', function() {
  firstQuestion.style.display = 'none'
  secondQuestion.style.display = 'block'
  one.classList.toggle('fade')
})

changedMind.addEventListener('click', function() {
  changedMind.style.display = 'none'
  noResponse.style.display = 'none'
  ofCourse.style.display = 'none'
  firstQuestion.style.display = 'none'
  secondQuestion.style.display = 'block'
  one.classList.toggle('fade')
})



// second question items
const secondQuestion = document.querySelector('.second-question')
const businessTypes = document.querySelectorAll('input[name="service-type"]')
const otherBtn = document.querySelector('input[value="other"]')
const otherOptionField = document.querySelector('.other-option-field')
const nextBtn = document.querySelector('.next-btn')

businessTypes.forEach(function(type) {
    type.addEventListener("click", function() {
        nextBtn.style.display = 'flex'
        otherOptionField.style.display = 'none'
        console.log("working")
    });
});

otherBtn.addEventListener('click', function() {
  otherOptionField.style.display = 'flex'
})

nextBtn.addEventListener('click', function() {
  secondQuestion.style.display = 'none'
  fourthQuestion.style.display = 'block'
  two.classList.toggle('fade')
})



// fourth question items
const fourthQuestion = document.querySelector('.fourth-question')
const questionFourError = document.getElementById('error-alt')
const questionHeader = document.getElementById('question-header')

const firstNameLabel = document.querySelector('#fname-label > .input-header')
const firstNameInput = document.getElementById('fname')

const phoneLabel = document.querySelector('#phone-label > .input-header')
const phoneInput = document.getElementById('phone')

const zipCodeLabel = document.querySelector('#zip-label > .input-header')
const zipCodeInput = document.getElementById('zip')

const submitBtn = document.querySelector('.submit-btn')


submitBtn.addEventListener('click', function(e) {
  let messages = []

  if (firstNameInput.value < 2) {
    messages.push('Name cant be blank')
    firstNameLabel.style.color = 'red'
    firstNameLabel.style.fontSize = '18px'
  } else {
    firstNameLabel.style.color = 'green'
  }

  if (phoneInput.value.length < 10 || phoneInput.value.length > 12) {
    messages.push('Phone # must be in US format, \n ex: (918) 456-2516')
    phoneLabel.style.color = 'red'
    phoneLabel.style.fontSize = '18px'
    // phoneInput.value = "";
  } else {
    phoneLabel.style.color = 'green'
  }

  if (zipCodeInput.value.length != 5) {
    messages.push('Zip Code must be 5 digits')
    zipCodeLabel.style.color = 'red'
    zipCodeLabel.style.fontSize = '18px'
    // zipCodeInput.value = "";
  }


  if (messages.length > 0) {
    e.preventDefault()
    questionFourError.innerText = messages.join('\n')
    questionHeader.style.display = 'none'
  }

  else {
    three.classList.toggle('fade')
  }
})
