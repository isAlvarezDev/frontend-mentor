export const createMainGridImgContainer = (url, src, alt) => {
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
    return mainGridImgDiv
}