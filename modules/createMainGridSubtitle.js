export const createMainGridSubtitle = (languageList, difficultyList) => {
    const mainGridSubtitleDiv = document.createElement("div")

    const div = document.createElement("div")
    const mainGridDifficultyDiv = document.createElement("div")
    languageList.forEach(language => {
        const span = document.createElement("span")
        span.textContent = language
        span.className = "main__span"
        if (language === "HTML") span.classList.add("main__span--color-lightblue")
        else if (language === "CSS") span.classList.add("main__span--color-darkblue")
        div.appendChild(span)
    })
    mainGridSubtitleDiv.appendChild(div)

    difficultyList.forEach(difficulty => {
        const span = document.createElement("span")
        span.className = "main__span"
        span.textContent = difficulty
        if (difficulty === '1') span.classList.add('main__span--background-lightblue')
        else if (difficulty === 'NEWBIE') {
            span.classList.add('main__span--color-lightblue')
            span.classList.add('main__span--padding')
        }
        mainGridDifficultyDiv.appendChild(span)
    })
    mainGridSubtitleDiv.appendChild(mainGridDifficultyDiv)

    mainGridSubtitleDiv.className = "main__grid-subtitle"
    mainGridDifficultyDiv.className = "main__grid-difficulty"
    return mainGridSubtitleDiv
}