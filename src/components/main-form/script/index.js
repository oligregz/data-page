import renderObj from "../../../utils/dataJson.js";

const formData = {};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.form-horizontal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    localStorage.clear();

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      formData[input.id] = input.value;
    });
    
    localStorage.setItem('formData', JSON.stringify(formData));
    
    alert('Dados capturados e armazenados no localStorage.');
    
    
    form.reset();
    renderObj()
    formData = {}
  });

});

export default formData;
