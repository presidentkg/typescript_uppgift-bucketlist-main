"use strict";
/*import { dreams as initialDreams, themes } from '../services/variables.js'
import { getDreams, updateDreams } from './DreamList.js'
import { checkInputEmpty } from '../utils/checkInput.js'

export interface Dream {
    id: number,
    name: string,
    theme: string,
    checked: boolean
}

export function addDream(): void {
    const addDreamForm = document.querySelector('form') as HTMLFormElement
    const dreamInput = document.getElementById('dream') as HTMLInputElement
    const themeSelect = document.getElementById('dream-select') as HTMLSelectElement
    themes.forEach(theme => {
        const option = document.createElement('option')
        option.value = theme
        option.textContent = theme
        themeSelect.appendChild(option)
    })
    const dreamErrorMessage = document.getElementById('dream-error-message') as HTMLParagraphElement
    const themeErrorMessage = document.getElementById('theme-error-message') as HTMLParagraphElement
    let userDreams = getDreams()
    
    addDreamForm.addEventListener('submit', (event) => {
        event.preventDefault()
        dreamErrorMessage.style.display = 'none'
        themeErrorMessage.style.display = 'none'

        if(!checkInputEmpty(dreamInput.value, dreamErrorMessage))
            return
        if(!checkInputEmpty(themeSelect.value, themeErrorMessage))
            return
    
        const dream = {
            id: userDreams.length + 1,
            name: dreamInput.value,
            theme: themeSelect.value,
            checked: false
        }
        userDreams.push(dream)
        updateDreams(userDreams)
        alert(`Drömmen "${dream.name}" har lagts till!`)
    })
}

export function removeDream(dreamId: number): void {
    let dreams = getDreams()
    dreams = dreams.filter(dream => dream.id !== dreamId)
    updateDreams(dreams)
}*/ 
//# sourceMappingURL=Dream.js.map