const friends = ['Shakil', 'Siam', 'Tabibur', 'Mamun', 'Nur Islam'];
const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength);
const products = [
    { name: 'phone', sku: 852, color: 'geeen' },
    { name: 'Tshirt', sku: 853, color: 'blue' },
    { name: 'watch', sku: 8565, color: 'black' },
];
const product = products.map(p => p);
// console.log(product);

products.forEach(x => console.log(x.sku, x.name));