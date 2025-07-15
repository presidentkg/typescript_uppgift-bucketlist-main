import { checkInputEmpty, checkInputLength } from '../utils/checkInput.js'

export function addEventListenerToLogInButton(): void {
    const loginForm = document.querySelector('form') as HTMLFormElement 
    const usernameInput = document.getElementById('username') as HTMLInputElement
    const usernameErrorMessage = document.getElementById('username-error-message') as HTMLParagraphElement
    const passwordInput = document.getElementById('password') as HTMLInputElement
    const passwordErrorMessage = document.getElementById('password-error-message') as HTMLParagraphElement

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        localStorage.clear()
        usernameErrorMessage.style.display = 'none'
        passwordErrorMessage.style.display = 'none'

        if(!checkInputEmpty(usernameInput.value, usernameErrorMessage))
            return
        if(!checkInputLength(passwordInput.value, passwordErrorMessage))
            return

        const username = usernameInput.value
        localStorage.setItem('username', username)

        window.location.href = 'Dashboard.html'
    })
}

