import { checkInputEmpty } from "../utils/checkInput.js";

export function addEventListenerToSaveNameBtn(changeName: HTMLElement, usernameErrorMessage: HTMLParagraphElement, usernameInput: HTMLInputElement): void {
    const saveNameButton = changeName.querySelector(".confirm-input") as HTMLButtonElement;
    saveNameButton.addEventListener("click", () => {
        usernameErrorMessage.style.display = 'none'
        if(!checkInputEmpty(usernameInput.value, usernameErrorMessage))
            return
        localStorage.setItem('username', usernameInput.value)
    })
}
