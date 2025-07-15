import { dreams as initialDreams } from '../services/variables.js';
import { checkInputEmpty } from '../utils/checkInput.js';
import { getThemes } from './ThemeList.js';
export function renderDreams() {
    let dreamsToRender = getDreams();
    const dreamList = document.querySelector('.dream-list');
    dreamList.innerHTML = '';
    dreamsToRender.forEach(dream => {
        const listItem = document.createElement('li');
        listItem.classList.add('dream-list_item');
        const checkbox = document.createElement('input');
        checkbox.className = 'dream-check';
        checkbox.type = 'checkbox';
        checkbox.name = `dream-check`;
        checkbox.id = `dream-check-${dream.id}`;
        checkbox.checked = dream.checked;
        listItem.appendChild(checkbox);
        const label = document.createElement('label');
        label.htmlFor = `dream-check-${dream.id}`;
        const labelText = document.createElement('span');
        labelText.textContent = dream.name + ', ';
        label.appendChild(labelText);
        const themeSpan = document.createElement('span');
        themeSpan.className = 'dream-theme';
        themeSpan.textContent = dream.theme;
        label.appendChild(themeSpan);
        listItem.appendChild(label);
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.addEventListener('click', () => {
            removeDream(dream.id);
        });
        const deleteIcon = document.createElement('img');
        deleteIcon.src = '../assets/images/trash_delete.png';
        deleteButton.appendChild(deleteIcon);
        listItem.appendChild(deleteButton);
        dreamList.appendChild(listItem);
    });
}
export function getDreams() {
    let dreams;
    const savedDreams = localStorage.getItem("dreams");
    if (savedDreams)
        dreams = JSON.parse(savedDreams);
    else
        dreams = initialDreams.slice();
    return dreams;
}
export function updateDreams(updateDreams) {
    localStorage.setItem("dreams", JSON.stringify(updateDreams));
}
export function addDream() {
    const addDreamForm = document.querySelector('form');
    const dreamInput = document.getElementById('dream');
    const themeSelect = document.getElementById('dream-select');
    const themes = getThemes();
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeSelect.appendChild(option);
    });
    const dreamErrorMessage = document.getElementById('dream-error-message');
    const themeErrorMessage = document.getElementById('theme-error-message');
    let userDreams = getDreams();
    addDreamForm.addEventListener('submit', (event) => {
        event.preventDefault();
        dreamErrorMessage.style.display = 'none';
        themeErrorMessage.style.display = 'none';
        if (!checkInputEmpty(dreamInput.value, dreamErrorMessage))
            return;
        if (!checkInputEmpty(themeSelect.value, themeErrorMessage))
            return;
        const dream = {
            id: userDreams.length + 1,
            name: dreamInput.value,
            theme: themeSelect.value,
            checked: false
        };
        userDreams.push(dream);
        updateDreams(userDreams);
        alert(`Drömmen "${dream.name}" har lagts till!`);
    });
}
function removeDream(dreamId) {
    let dreams = getDreams();
    dreams = dreams.filter(dream => dream.id !== dreamId);
    updateDreams(dreams);
    renderDreams();
}
//# sourceMappingURL=DreamList.js.map