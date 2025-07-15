import { checkInputEmpty } from "../utils/checkInput.js";
export function addEventListenerToSaveNameBtn(changeName, usernameErrorMessage, usernameInput) {
    const saveNameButton = changeName.querySelector(".confirm-input");
    saveNameButton.addEventListener("click", () => {
        usernameErrorMessage.style.display = 'none';
        if (!checkInputEmpty(usernameInput.value, usernameErrorMessage))
            return;
        localStorage.setItem('username', usernameInput.value);
    });
}
//# sourceMappingURL=SaveNameBtn.js.map