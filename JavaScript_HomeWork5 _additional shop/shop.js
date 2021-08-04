//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const form = document.forms.itemForm;
const nameProduct = form.name;
const priceProduct = form.price;
const quantityProduct = form.cilcist;
const imgProduct = form.img;
const sendProduct = form.BtnSend;

    let storageProduct = [];

    const getProduct = localStorage.getItem('storageProduct');

    storageProduct = JSON.parse(getProduct) || [];

    sendProduct.onclick = function () {

    storageProduct.push ({nameProduct: nameProduct.value, priceProduct: priceProduct.value, quantityProduct: quantityProduct.value, imgProduct: imgProduct.value, id: storageProduct.length+1});

    localStorage.setItem('storageProduct',JSON.stringify(storageProduct));

    form.input.value = '';
}



