const productData = {};

const productForm = document.querySelector('.form-product');


const generateProductObject = (element) => {
  const product = {
    descricaoProduto: element.querySelector('#produto').value || '',
    unidadeMedida: element.querySelector('#und-medida').value || 0,
    qtdeEstoque: element.querySelector('#qtde-estoque').value || 0,
    valorUnitario: element.querySelector('#valor-unitario').value || 0,
    valorTotal: element.querySelector('#valor-total').value || 0
  };

  return product;
};

const updateProductData = (element) => {
  const productIndex = element.dataset.index || 0; 
  if (!productData[productIndex]) {
    productData[productIndex] = [];
  }

  const product = generateProductObject(element);
  productData[productIndex][0] = product;
  console.log("Updated Product Data:", productData);

  const productKey = 'productData';
  const productDatajson = JSON.stringify(productData);
  
  console.log(productDatajson);
  localStorage.setItem(productKey, productDatajson);
};

const removeProduct = (element) => {
  const productIndex = element.dataset.index || 0;

  element.closest('.product').remove();

  delete productData[productIndex];
  console.log("Updated Product Data:", productData);

  const productKey = 'productData';
  const productDatajson = JSON.stringify(productData);
  localStorage.setItem(productKey, productDatajson);
};

if (productForm) {
  productForm.addEventListener('click', (event) => {
    if (event.target.classList.contains('lixeira-icon')) {
      const productElement = event.target.closest('.product');
      removeProduct(productElement);
    }
  });
}


const updateTotalValue = (element) => {
  const qtdeEstoque = element.querySelector('#qtde-estoque').value;
  const valorUnitario = element.querySelector('#valor-unitario').value;
  const valorTotal = parseFloat(qtdeEstoque) * parseFloat(valorUnitario);
  element.querySelector('#valor-total').value = valorTotal.toFixed(2);
  
  updateProductData(element);
};

const addProduct = () => {
  const productsList = document.querySelector('.products-list');
  const productChild = productsList.firstElementChild.cloneNode(true);

  const currentIndex = Object.keys(productData).length;
  productChild.dataset.index = currentIndex;

  const inputs = productChild.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.value = '';
  });

  productsList.appendChild(productChild);

  updateProductData(productChild);
};

productForm.addEventListener('input', (event) => {
  if (event.target.classList.contains('form-control')) {
    const productElement = event.target.closest('.product');
    updateTotalValue(productElement);
  }
});

document.getElementById('add-product').addEventListener('click', addProduct);

export default productData;
