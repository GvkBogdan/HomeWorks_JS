// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
/*
const p_content = document.getElementById('content');
console.log(p_content.innerText);
*/
//----------------------------------------------------------------------
/*
// -- отримує текст з блоку з id "rules"
const p_rules = document.getElementById('rules');
console.log(p_rules.innerText);
*/
//--------------------------------------------------------------------------
//замініть текст параграфа з id 'content' на будь-який інший
/*
const p_content = document.getElementById('content');
console.log(p_content.innerText = 'замініть текст параграфа з id  на будь-який інший');
*/
//---------------------------------------------------------------------------
// -- замініть текст параграфа з id 'rules' на будь-який інший
/*
const p_rules = document.getElementById('rules');
console.log(p_rules.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший ');
*/
//------------------------------------------------------------------------

// -- змініть кожному елементу колір фону на червоний
/*
let bodyChildrenFon = document.body.children;
for (const itemsClass of bodyChildrenFon) {
    itemsClass.style.backgroundColor = ' red';
}
*/
//-----------------------------------------------------------------

// -- змініть кожному елементу колір тексту на синій
/*
let bodyChildrenColor = document.body.children;
for (const itemsClass of bodyChildrenColor) {
    itemsClass.style.color = ' blue';
}
*/



//-------------------------------------------------------------------------------------------
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

/*
const classOfElements = document.getElementById('rules');
for (const classOfElement of classOfElements.classList) {
    console.log(classOfElement);
}
*/

/*
let bodyChildren = document.body.children;
for (const itemsClass of bodyChildren) {
    if (itemsClass.id === 'rules' ){
        console.log(itemsClass.classList.value);
    }
}
*/

/*
let aarRules = [...bodyChildren];
for (const itemsRules of aarRules) {
    console.log(itemsRules.classList.value);
}
*/

//---------------------------------------------------------------------------------------------------

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь


/*
let elementRiles = document.getElementsByClassName('fc_rules');
console.log(elementRiles);
for (const element of elementRiles) {
    element.onclick = function () {
        element.style.color = 'red'
        console.log(element.innerText);
    }
}
*/

//---------------------------------------------------------------------------------

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let eleColorRiles = document.getElementsByClassName('fc_rules');
for (const element of eleColorRiles) {
    element.style.color = 'red';
}
*/

