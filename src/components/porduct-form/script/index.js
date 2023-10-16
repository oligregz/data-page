const productData = [];

const generateProductObject = (element) => {
  const product = {
    indice: productData.length + 1,
    descricaoProduto: element.querySelector('#produto').value || '',
    unidadeMedida: element.querySelector('#und-medida').value || '',
    qtdeEstoque: element.querySelector('#qtde-estoque').value || '',
    valorUnitario: element.querySelector('#valor-unitario').value || '',
    valorTotal: element.querySelector('#valor-total').value || ''
  };

  return product;
};

const updateProductData = (element) => {
  const productIndex = element.dataset.index;
  const product = generateProductObject(element);
  productData[productIndex] = product;
  console.log("Updated Product Data:", productData);
};

const updateTotalValue = (element) => {
  const qtdeEstoque = element.querySelector('#qtde-estoque').value;
  const valorUnitario = element.querySelector('#valor-unitario').value;
  const valorTotal = parseFloat(qtdeEstoque) * parseFloat(valorUnitario);
  element.querySelector('#valor-total').value = valorTotal.toFixed(2);
  
  // Atualizar o objeto de produto
  updateProductData(element);
};

const addProduct = () => {
  const productsList = document.querySelector('.products-list');
  const productChild = productsList.firstElementChild.cloneNode(true);
  
  // Adicionar um índice (data-index) para identificar o produto
  const currentIndex = productData.length;
  productChild.dataset.index = currentIndex;

  // Limpar os valores dos inputs no novo produto
  const inputs = productChild.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.value = '';
  });

  productsList.appendChild(productChild);
};

const productForm = document.querySelector('.form-product');
productForm.addEventListener('input', (event) => {
  if (event.target.classList.contains('form-control')) {
    const productElement = event.target.closest('.product');
    updateTotalValue(productElement);
  }
});

document.getElementById('add-product').addEventListener('click', addProduct);
