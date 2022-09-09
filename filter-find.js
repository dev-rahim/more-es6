const products = [
    { name: 'phone', sku: 852, color: 'geeen', price: 10000 },
    { name: 'Tshirt', sku: 853, color: 'blue', price: 50 },
    { name: 'laptop', sku: 8588, color: 'black', price: 98000 },
    { name: 'watch', sku: 8565, color: 'black', price: 10 },
];
const bigestPrice = products.filter(x => x.price > 30);
// console.log(bigestPrice);
const findSomething = products.find(x => x.color == 'black');
console.log(findSomething);