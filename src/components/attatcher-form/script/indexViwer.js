const download = (element, url) => {
  element.href = url;
  element.click();
} 

const getBlobFile = (file) => {
  const blob = new Blob([file], {type: 'application/pdf'});
  if(localStorage.getItem("blobFile")) {
    localStorage.removeItem("blobFile");
  }
  const urlBlob = URL.createObjectURL(blob);
  
  const parts = urlBlob.split("/");
  const code = parts[parts.length - 1];

  localStorage.setItem("blobUrl", JSON.stringify(urlBlob));
  localStorage.setItem("blobCode", JSON.stringify(code));
  URL.revokeObjectURL(urlBlob);
}

const getUrlFile = (fileObject) => {
  const url = URL.createObjectURL(fileObject);
  getBlobFile(fileObject);
  localStorage.setItem("urlFile", JSON.stringify(url));
}

const getUrlFileFromLocalStorage = () => {
  const url = localStorage.getItem("urlFile");
  return JSON.parse(url);
}

document.addEventListener("DOMContentLoaded", () => {
  const embed = document.querySelector('.myPdfEmbed');
  const elementADownload = document.querySelector('.downloadButton');
  const url = getUrlFileFromLocalStorage();
  embed.src = url;
  download(elementADownload, url);
});

export default getUrlFile;
