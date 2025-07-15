import { createErrorMessage } from "../utils/checkInput.js";
import { addEventListenerToSaveNameBtn } from "../components/SaveNameBtn.js";
import { renderThemes, addTheme } from "../models/ThemeList.js";
import { logOut } from "../components/LogOutBtn.js";

//Ändra namn
const changeName = document.querySelector(".change-name") as HTMLDivElement;
const usernameErrorMessage = createErrorMessage(changeName);
const usernameInput = document.getElementById("name-input") as HTMLInputElement
const username = localStorage.getItem('username') as string;
usernameInput.value = username;
addEventListenerToSaveNameBtn(changeName, usernameErrorMessage, usernameInput);

// Teman
renderThemes();
addTheme()

// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn?.addEventListener("click", logOut);
