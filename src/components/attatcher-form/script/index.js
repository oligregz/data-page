import getUrlFile from "./indexViwer.js";

const filesList = document.querySelector(".files-list");

const getNewLi = () => {
  const fileLi = document.querySelector(".file");
  if (fileLi) {
    const clonedLi = fileLi.cloneNode(true);
    const content = clonedLi.querySelector(".content");
    const docFile = content.querySelector(".doc-file");
    docFile.textContent = "Anexar Documento";
    content.dataset.fileContent = null;
    filesList.appendChild(clonedLi);
    attachFileListener(clonedLi);
    attachDeleteListener(clonedLi);
    attachDownloadListener(clonedLi);
  }
};

const attachFileListener = (li) => {
  const contentElement = li.querySelector(".content");
  contentElement.addEventListener("click", () => {
    const input = document.createElement("input");
    input.className = "attatcher-input";
    input.type = "file";
    input.accept = "application/pdf,.doc,.docx,.txt";

    input.addEventListener("change", (event) => {
      let file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileContent = e.target.result;
          contentElement.dataset.fileContent = fileContent;
          const docFile = contentElement.querySelector(".doc-file");
          docFile.textContent = file.name;
        };
        reader.readAsArrayBuffer(file);
        getUrlFile(file);
      }
    });

    input.click();
  });
};


const attachViewListener = (li) => {
  const viewIcon = li.querySelector(".visualizar-icon");
  viewIcon.addEventListener("click", (event) => {
    event.stopPropagation();

    const url = "../attatcher-form/fileViewer.html";
    window.open(url, "_");
  });
};

const attachDeleteListener = (li) => {
  const deleteIcon = li.querySelector(".lixeira-icon");
  deleteIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });
};

const attachDownloadListener = (li) => {
  const downloadIcon = li.querySelector(".visualizar-icon");
  downloadIcon.addEventListener("click", (event) => {
    event.stopPropagation();

    const docFile = li.querySelector(".doc-file");
    const fileName = docFile.textContent.trim();
    const fileContent = li.querySelector(".content").dataset.fileContent || "";

    if (fileContent) {
      const bytes = new Uint8Array(fileContent.split(",").map(Number));
      const blob = new Blob([bytes], { type: "application/pdf" });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    }
  });
};

const firstLi = document.querySelector(".file");
if (firstLi) {
  attachFileListener(firstLi);
  attachViewListener(firstLi);
  attachDeleteListener(firstLi);
  // attachDownloadListener(firstLi);
}

document
  .querySelector(".form-group button.product")
  .addEventListener("click", () => {
    getNewLi();
  }
);
