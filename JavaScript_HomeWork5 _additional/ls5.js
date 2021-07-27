// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

console.log(document.forms.fn_1);
let formForName = document.forms.fn_1;

console.log(formForName.textForm);
console.log(formForName.submit);

const textForm = formForName.textForm;
const sendBtn = formForName.submit;

sendBtn.onclick = function (ev) {

    localStorage.setItem('text',textForm.value)

};



