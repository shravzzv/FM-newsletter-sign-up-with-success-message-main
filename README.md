# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)

### Links

- Solution URL: [https://github.com/shravzzv/FM-newsletter-sign-up-with-success-message-main](https://github.com/shravzzv/FM-newsletter-sign-up-with-success-message-main)
- Live Site URL: [https://shravzzv.github.io/FM-newsletter-sign-up-with-success-message-main/](https://shravzzv.github.io/FM-newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This project helped me reinforce my understanding of form validation and responsive design. Below is an example of the email validation logic I implemented:

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(emailValue)) {
  error.style.display = 'block'
  input.style.backgroundColor = '#df9d9d'
} else {
  error.style.display = 'none'
}
```

### Continued development

I plan to continue improving my skills in:

- Advanced form validation techniques
- Accessibility best practices
- Optimizing CSS for better performance
