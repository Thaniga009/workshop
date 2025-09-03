
const products = [
  { price: 100, discount: 10 },  
  { price: 200, discount: 20 },  
  { price: 150, discount: 5 },   
  { price: 300, discount: 15 },  
  { price: 100, discount: 0 }    
];

function calculateTotal() {
  let total = 0;

  products.forEach(product => {
    const discountedPrice = product.price * (1 - product.discount / 100);
    total += discountedPrice;
  });

  console.log(`Total price after discount: $${total.toFixed(2)}`);
}

calculateTotal();
