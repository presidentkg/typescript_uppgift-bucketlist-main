export function checkInputEmpty(input: string, errorMessage: HTMLParagraphElement): boolean {
    if (input.trim() === '') {
        errorMessage.style.display = 'block'
        return false
    }
    else
        return true
}

export function checkInputLength(input: string, errorMessage: HTMLParagraphElement): boolean {
    if (input.length < 4) {
        errorMessage.style.display = 'block'
        return false
    }
    else
        return true
}

export function createErrorMessage(changeName: HTMLDivElement): HTMLParagraphElement{
    const usernameErrorMessage = document.createElement('p') as HTMLParagraphElement
    usernameErrorMessage.classList.add('error-message')
    usernameErrorMessage.setAttribute('role', 'alert')
    usernameErrorMessage.style.display = 'none'
    usernameErrorMessage.style.color = "black"
    usernameErrorMessage.innerHTML = 'Användarnamnet kan inte vara tomt'
    changeName.appendChild(usernameErrorMessage)
    return usernameErrorMessage
}