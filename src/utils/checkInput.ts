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
