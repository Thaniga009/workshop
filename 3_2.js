let Product_Price = 0
let Discount_Percentage = 0

function calculateFinalPrice(productPrice, discountPercent) {
   
    let discountAmount = productPrice * (discountPercent / 100);
    let priceAfterDiscount = productPrice - discountAmount;

    if (priceAfterDiscount <= 0) {
        return 0;
    }

    if (priceAfterDiscount < 500) {
        priceAfterDiscount += 50;
    }

    else if (priceAfterDiscount > 500) {
        priceAfterDiscount *= 0.9; 
    }

    return priceAfterDiscount;
}
let price = 600;
let discount = 20;

let finalPrice = calculateFinalPrice(price, discount);
console.log("ราคาสุดท้ายที่ต้องจ่ายคือ: " + finalPrice.toFixed(2) + " บาท");
