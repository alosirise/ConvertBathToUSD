function converter(currency) {
    money = (currency*0.03);
    return `$${money.toFixed(2)}`
   
}
module.exports = converter;

// converter(currency)