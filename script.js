const form = document.querySelector('.newsletter__form')
const error = document.querySelector('.newsletter__error')
const input = document.querySelector('.newsletter__input')
// there's only a single email input in the UI

const handleSubmit = (e) => {
  e.preventDefault()
  const emailInput = form.querySelector('input[type="email"]')
  const emailValue = emailInput.value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(emailValue)) {
    error.style.display = 'block'
    input.style.backgroundColor = '#df9d9d'
  } else {
    error.style.display = 'none'
    window.location.href = '/success.html'
  }
}

form.addEventListener('submit', handleSubmit)
