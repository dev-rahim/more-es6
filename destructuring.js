const fish = { id: 50, name: 'king mach', price: 9000, phone: '01835875487587', address: 'jashore', dress: 'silver' };
// const phone = fish.phone;
// // const { id, name, phone } = fish;
// console.log(phone);
// console.log(id);
// console.log(phone);
// console.log(name);

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
const { address, name } = company.shop.bookShop;
console.log(address, name);