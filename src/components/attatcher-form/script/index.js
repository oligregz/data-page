const filesList = document.querySelector(".files-list");

const getNewLi = (fileName) => {
  const fileLi = document.querySelector(".file");

  if (fileLi) {
    const clonedLi = fileLi.cloneNode(true);
    const content = clonedLi.querySelector(".content");
    const docFile = content.querySelector(".doc-file");
    docFile.textContent = fileName || "Adicionar Documento";
    filesList.appendChild(clonedLi);
    attachFileListener(clonedLi);
    attachDeleteListener(clonedLi);
  }
};

const attachFileListener = (li) => {
  const contentElement = li.querySelector(".content");
  contentElement.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf,.doc,.docx,.txt";

    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const fileName = file.name;
        const docFile = contentElement.querySelector(".doc-file");
        docFile.textContent = fileName;
      }
    });

    input.click();
  });
};

const attachDeleteListener = (li) => {
  const deleteIcon = li.querySelector(".lixeira-icon");
  deleteIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });
};

const attachDownloadListener = (li, fileName) => {
  const downloadIcon = li.querySelector(".visualizar-icon");
  downloadIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    let data = "Um conteúdo qualquer";
    let blob = new Blob([data], { type: "text/plain;charset=utf-8;" });
    const link = window.document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "export.txt";
    link.click();
    window.URL.revokeObjectURL(link.href);
  });
};

const firstLi = document.querySelector(".file");
if (firstLi) {
  attachFileListener(firstLi);
  attachDeleteListener(firstLi);
  attachDownloadListener(firstLi);
}

document
  .querySelector(".form-group button.product")
  .addEventListener("click", () => {
    getNewLi();
  });
