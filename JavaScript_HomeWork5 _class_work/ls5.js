// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
/*
let elementMainHead = document.getElementById('main_header');
elementMainHead.innerText = ' june - 2021 - JS-Complex ';
elementMainHead.style.color = 'green';
*/
//--------------------------------------------------------------------------------------------------

// b) робить шириниу елементу ul 400px
/*
let ulWidth = document.getElementsByTagName('ul');
ulWidth[0].style.width = '480px';
 */
//---------------------------------------------------------------------------------------------------------

// c) робить шириниу всіх елементів з класом linkList шириною 50%
/*
let linkListWidth = document.getElementsByClassName('linkList');
for (const linkLidElement of linkListWidth) {
    linkLidElement.style.width = '50%';
}
/*

//------------------------------------------------------------------------------------------------------------
// d) отримує текст який зберігається в елементі з класом listElement2
/*
 let textofElement = document.getElementsByClassName('listElement2');
textofElement[0].innerText;
console.log(textofElement[0].innerText);
 */
//-------------------------------------------------------------------------------------------------------------
// e) отримує всі елементи li та змінює ім колір фону на сірий
/*
let elementsLi = document.getElementsByTagName('li');
for (const liElement of elementsLi) {
    liElement.style.backgroundColor = 'grey';
}
 */
//---------------------------------------------------------------------------------------------------------------
// f) отримує всі елементи 'a' та додає їм клас anchor
/*
let aElements = document.getElementsByTagName('a')
for (const elementA of aElements) {
    elementA.classList.add('anchor');
}
 */
//----------------------------------------------------------------------------------------------------------------
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
//тексту на 40 пікселів
/*
let aElements = document.getElementsByTagName('a');
for (const element of aElements) {
    if (element.innerText === 'link3'){
        element.style.fontSize = '40px';
    }
}
*/
//------------------------------------------------------------------------------------------------------------
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*
let aElements = document.getElementsByTagName('a');
for (const Element of aElements) {
    Element.classList.add(`element_${Element.innerText}`)//('element_'+Element.innerText)
}
*/
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*
let elementsSub_header = document.getElementsByClassName('sub-header');
for (const SubHeaderElement of elementsSub_header) {
    SubHeaderElement.style.backgroundColor = prompt('color');
    }
*/
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment
// . Колір отримати з prompt()
/*
let elementsSub_header = document.getElementsByClassName('sub-header');
for (const SubHeaderElement of elementsSub_header) {
    if(SubHeaderElement.innerText === 'content 2 segment'){
        SubHeaderElement.style.color = 'yellow'
    }
}
 */

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*
let  elementsContent = document.getElementsByClassName('content_1');
elementsContent[0].innerText = prompt('write text');
*/
//------------------------------------------------------------------------------------------------
// l) отримати елементи p та змінити їм padding на 20px
/*
let elementsP = document.getElementsByTagName('p');
for (const pElement of elementsP) {
    pElement.style.padding = '20px'
}
 */

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
/*
let elementsText2 = document.getElementsByClassName('text2');
elementsText2[0].innerText = 'june - 2021 - JS-Complex';
*/