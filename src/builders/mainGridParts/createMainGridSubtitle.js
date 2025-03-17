export const createMainGridSubtitle = (languageList, difficultyList) => {
    const mainGridSubtitleDiv = document.createElement("div")

    const div = document.createElement("div")
    const mainGridDifficultyDiv = document.createElement("div")
    languageList.forEach(language => {
        const span = document.createElement("span")
        span.textContent = language
        span.className = "main__span"
        if (language === "HTML") span.classList.add("main__span--html")
        else if (language === "CSS") span.classList.add("main__span--css")
        else span.classList.add('main__span--js')
        div.appendChild(span)
    })
    mainGridSubtitleDiv.appendChild(div)

    difficultyList.forEach(difficulty => {
        const span = document.createElement("span")
        span.className = "main__span"
        span.textContent = difficulty
        span.classList.add('main__span--padding')
        if (difficulty.includes('1')) {
            span.classList.add('main__span--lightblue')
            mainGridDifficultyDiv.style.borderColor = '#6ABECD'
        }
        else if(difficulty.includes('2')) {
            span.classList.add('main__span--lime')
            mainGridDifficultyDiv.style.borderColor = '#AAD742'
        }
        mainGridDifficultyDiv.appendChild(span)
    })
    mainGridSubtitleDiv.appendChild(mainGridDifficultyDiv)

    mainGridSubtitleDiv.className = "main__grid-subtitle"
    mainGridDifficultyDiv.className = "main__grid-difficulty"
    return mainGridSubtitleDiv
}