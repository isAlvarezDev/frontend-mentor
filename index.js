import data from './data/data.js'

const mainGridSection = document.querySelector(".main__grid")
const documentFragment = document.createDocumentFragment()

const createGridItems = () => {
    data.forEach(data => {
        const mainGridItemDiv = document.createElement('div')
        mainGridItemDiv.className = "main__grid-item"
        
        
    })
}

const createMainGridImgContainer = (url, src, alt) => {
    const mainGridImgDiv = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('img')
    mainGridImgDiv.className = "main__grid-img-container"
    a.href = url
    a.target = "_blank"
    img.src = src
    img.alt = alt
    a.appendChild(img)
    mainGridImgDiv.appendChild(a)
}

const createMainGridDescription = (title, description) => {
    const mainGridDescriptionDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    h2.textContent = title
    h2.className = "main__grid-title"
    p.textContent = description
}

const createMainGridSubtitle = (spanTextList, spanDifficultyList) => {
    const mainGridSubtitleDiv = document.createElement("div")
    const div = document.createElement("div")
    const mainGridDifficultyDiv = document.createElement("div")
    mainGridSubtitleDiv.className = "main__grid-subtitle"
    spanTextList.forEach(spanText => {
        const span = document.createElement("span")
        span.textContent = spanText
        span.className = "main__span"
        if(spanText === "HTML") span.classList.add("main__span--color-lightblue")
        else if(spanText === "CSS") span.classList.add("main__span--color-darkblue")
        div.appendChild(span)
    })
    mainGridSubtitleDiv.appendChild(div)

    spanDifficultyList.forEach(spanDifficulty => {
        const span = document.createElement("span")
        span.className = "main__span"
        span.textContent = spanDifficulty
        if(spanDifficulty === '1') span.classList.add('main__span--background-lightblue')
        else if (spanDifficulty === 'NEWBIE') span.classList.add('main__span--color-lightblue main__span--padding')
        mainGridDifficultyDiv.appendChild(span)
    })
    mainGridSubtitleDiv.appendChild(mainGridDifficultyDiv)
}