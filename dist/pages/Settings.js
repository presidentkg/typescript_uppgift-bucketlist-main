import { createErrorMessage } from "../utils/checkInput.js";
import { addEventListenerToSaveNameBtn } from "../components/SaveNameBtn.js";
import { renderThemes, addTheme } from "../models/ThemeList.js";
import { logOut } from "../components/LogOutBtn.js";
//Ändra namn
const changeName = document.querySelector(".change-name");
const usernameErrorMessage = createErrorMessage(changeName);
const usernameInput = document.getElementById("name-input");
const username = localStorage.getItem('username');
usernameInput.value = username;
addEventListenerToSaveNameBtn(changeName, usernameErrorMessage, usernameInput);
// Teman
renderThemes();
addTheme();
// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", logOut);
//# sourceMappingURL=Settings.js.map