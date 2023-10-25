const getUrlFile = (fileObject) => {
  const url = URL.createObjectURL(fileObject);
  localStorage.setItem("urlFile", JSON.stringify(url));
}

const getUrlFileFromLocalStorage = () => {
  const url = localStorage.getItem("urlFile");
  return JSON.parse(url);
}

document.addEventListener("DOMContentLoaded", () => {
  const embed = document.querySelector('.myPdfEmbed');
  const ifr = document.querySelector(".if");
  const url = getUrlFileFromLocalStorage();
  embed.src = url;
});

export default getUrlFile;
