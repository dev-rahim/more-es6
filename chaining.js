const [p, q] = [12, 15];
console.log(p + q);
// optional chaining
const company = {
    web: {
        ceo: { id: 5, Name: 'Rahim' },
        manager: { id: 10, Name: 'Basir' }
    },
    shop: {
        bookShop: {
            name: 'azim book shop',
            address: 'ramganj',
        }
    }
}

console.log(company?.web?.address?.ceo);