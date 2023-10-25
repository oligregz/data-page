const getUrlFile = (fileObject) => {
  const url = URL.createObjectURL(fileObject);
  localStorage.setItem("urlFile", JSON.stringify(url));
  const local = localStorage.getItem("urlFile");
}

const getUrlFileFromLocalStorage = () => {
  const url = localStorage.getItem("urlFile");
  return JSON.parse(url);
}

document.addEventListener("DOMContentLoaded", () => {
  const embed = document.querySelector('.myPdfEmbed');
  const url = getUrlFileFromLocalStorage();
  embed.src = url;
});

export default getUrlFile;
