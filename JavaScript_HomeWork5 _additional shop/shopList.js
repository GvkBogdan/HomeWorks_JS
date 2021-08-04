
let ourProduct = localStorage.getItem('storageProduct');

if (ourProduct === null){
    noProduct = document.getElementsByClassName('noproduct')[0];
    noProduct.innerHTML = `<h2> No Product </h2>`;
}else {

    ourProduct = JSON.parse(ourProduct);

    let deleteAll = document.createElement('button');
    deleteAll.innerText = 'Delete All';

    for (const element of ourProduct) {

        let i = element.id;

        let productBloc = document.createElement('div');

        let productName = document.createElement('h3');
        productBloc.innerText = element.nameProduct;

        let productPrice = document.createElement('p');
        productPrice.innerText = element.priceProduct;

        let productQuantity = document.createElement('p');
        productQuantity.innerText = element.quantityProduct;

        let productImg = document.createElement('img');
        productImg.src = element.imgProduct;

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = `Delete${i}`
        deleteBtn.onclick = function () {

            ourProduct = ourProduct.filter(element => element.id !== i);
            localStorage.setItem('storageProduct',JSON.stringify(ourProduct));
            productBloc.innerHTML='';
        }

        productBloc.appendChild(productName);
        productBloc.appendChild(productPrice);
        productBloc.appendChild(productQuantity);
        productBloc.appendChild(productImg);
        productBloc.appendChild(deleteBtn);
        document.body.appendChild(productBloc);
        deleteAll.onclick = function () {

            localStorage.clear();
            location.reload();
        }
        document.body.appendChild(deleteAll);

    }
}
