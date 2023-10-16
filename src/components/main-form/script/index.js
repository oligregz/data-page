// import getElements from "../../porduct-form/script/index.js";
import renderObj from "../../../utils/dataJson.js";

const formData = {};

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form.form-horizontal');

  form.addEventListener('submit', function(event) {
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

// const addProduct = () => {
//   // chama função que clona os elementos contida no script
//   // do productForm
//   console.log("click");
//   // getElements();
// }

// document.getElementById('add-product').addEventListener('click', addProduct);

export default formData;
