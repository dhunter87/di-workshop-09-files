var fs = require('fs')
var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8');
// var result = fileContents.split('\r\n');
// console.log(result);
var data = JSON.parse(fileContents)
// console.log(data)
var totalPrice = 0;
for (var item of data.basket) {
    if(item.name == 'Candles'){
        item.quantity = 10;
    }
    var pricePerItem = item.price * item.quantity
    console.log(item.name + " $" +  pricePerItem);
    totalPrice += pricePerItem;
}
console.log(totalPrice);
var jsonString = JSON.stringify(data, null, 2);
fs.writeFileSync('new-basket.json', jsonString, 'utf-8');