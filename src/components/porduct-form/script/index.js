const getElements = () => {
  // Retrieve the products list dynamically each time the function is called
  const productsList = document.querySelector('.products-list');
  const productChild = productsList.firstElementChild.cloneNode(true);
  productsList.appendChild(productChild);
  console.log(productChild)
}
const addProduct = () => {
  // chama função que clona os elementos contida no script
  // do productForm
  getElements();
  console.log("click");
}


document.getElementById('add-product').addEventListener('click', addProduct);
document.querySelector('.products-list');