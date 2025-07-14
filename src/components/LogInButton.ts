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

    if (usernameInput.value.trim() === '') {
        usernameErrorMessage.style.display = 'block'
        return
    }

    if (passwordInput.value.length < 4) {
        passwordErrorMessage.style.display = 'block'
        return
    }

    const username = usernameInput.value
    localStorage.setItem('username', username)

    window.location.href = 'Dashboard.html'
})
}

