const filesList = document.querySelector('.files-list');

const getNewLi = (fileName) => {
  const fileLi = document.querySelector('.file');

  if (fileLi) {
    const clonedLi = fileLi.cloneNode(true);
    const content = clonedLi.querySelector('.content');
    const docFile = content.querySelector('.doc-file');
    docFile.textContent = fileName || 'Adicionar Documento';
    filesList.appendChild(clonedLi);
    attachFileListener(clonedLi);
  }
}

const attachFileListener = (li) => {
  const contentElement = li.querySelector('.content');
  contentElement.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf,.doc,.docx,.txt';

    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const fileName = file.name;
        const docFile = contentElement.querySelector('.doc-file');
        docFile.textContent = fileName;
      }
    });

    input.click();
  });
};

attachFileListener(document.querySelector('.file'));

document.querySelector('.form-group button.product').addEventListener('click', () => {
  getNewLi();
});
