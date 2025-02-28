export const createMainGridImgContainer = (url, dataSrc, alt) => {
  const mainGridImgDiv = document.createElement("div");
  const a = document.createElement("a");
  const img = document.createElement("img");

  mainGridImgDiv.className = "main__grid-img-container";
  a.href = url;
  a.target = "_blank";
  img.alt = alt;

  img.dataset.src = dataSrc;

  a.appendChild(img);
  mainGridImgDiv.appendChild(a);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  observer.observe(img);

  return mainGridImgDiv;
};
