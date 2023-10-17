const getNewLi = (fileName) => {
  const filesList = document.querySelector('.files-list');
  const fileLi = document.querySelector('.file');

  if (fileLi) {
    const clonedLi = fileLi.cloneNode(true);
    const content = clonedLi.querySelector('.content');
    const docFile = content.querySelector('.doc-file');
    docFile.textContent = fileName || 'Adicionar Documento';
    filesList.appendChild(clonedLi);
  }
}

document.addEventListener("click", () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/pdf,.doc,.docx,.txt';

  input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      getNewLi(fileName);
    }
  });

  input.click();
});
