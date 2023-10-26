const getBlobFile = (file) => {
  const blob = new Blob([file], {type: 'application/pdf'});
  if(localStorage.getItem("blobFile")) {
    localStorage.removeItem("blobFile");
  }
  const urlBlob = URL.createObjectURL(blob);
  console.log(urlBlob)
  localStorage.setItem(JSON.stringify(urlBlob));
  URL.revokeObjectURL(urlBlob);
}

const getUrlFile = (fileObject) => {
  const url = URL.createObjectURL(fileObject);
  localStorage.setItem("urlFile", JSON.stringify(url));
  getBlobFile(fileObject);
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
