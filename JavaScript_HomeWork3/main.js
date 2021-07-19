//створити функцію яка обчислює та повертає площу прямокутника висотою

/*function sRectangle(a, b) {

    let s = a * b;
    console.log(s);
}
sRectangle(5, 6);
*/

//-----------------------------------------------------------

//створити функцію яка обчислює та повертає площу кола

/*
function sCircle(radius) {

    return 2 * Math.PI * radius;
}
console.log(sKola(10));
 */
//----------------------------------------------------------------

// /створити функцію яка обчислює та повертає площу циліндру

/*
function sCylinder(radius, height) {

    return (2 * Math.PI * radius * (radius + height));
    
}

console.log(sCylinder(20, 21));

 */
//------------------------------------------------------------------------------
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше
// а виводить найбільше (Math використовувати заборонено);


/*

function minMax() {
    let ListNumbers = [];
    for (let i = 0; i <arguments.length ; i++) {
        ListNumbers [i] = arguments[i]
    }
    let min = ListNumbers [0];
    let max = ListNumbers [0];
    for (const number of ListNumbers) {
        if (number < min) {
            min = number;
        } else if (number > max) {
            max = number;
        }
    }
    console.log(max);
    return min;
}
console.log(minMax(25,13,68,98,5,4,7,5,3,100)) // Задаємо аргумент

 */


//-------------------------------------------------------------------------------------------
//створити функцію яка при створює блок з текстом. Текст задати через аргумент

/*
function divText(vvedit_text) {

    document.write(`<div>${vvedit_text}</div>`);
}
divText(' Tyt zadaemo text');
 */


//------------------------------------------------------------------------------------------------
//створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*
function listLi(Text_Li) {

    document.write(`<ul><li>${Text_Li}</li><li>${Text_Li}</li><li>${Text_Li}</li></ul>`);
}
listLi(' Tyt zadaemo odnakovui text vsim elementam li');

 */

//-----------------------------------------------------------------------------------------------------------------

//створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*
function listLi(Text_Li, li) {


   document.write(`<ul>`);
              // ----Через цикил While------
   /*let i = 0;
   while ( i < li){
       document.write(`<li>${Text_Li}</li>`);
       i++;
   }*/
// ----Через цикил for------
/*for (let i = 0; i < li; i++){
    document.write(`<li>${Text_Li}</li>`);
}*
document.write(`</ul>`);
}
listLi(' Tyt zadaemo odnakovui text vsim elementam li',5);


*/

//-------------------------------------------------------------------------------------------------------

// /створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
function listElements(arrElements = []) {
    let arrTotal = [];
    document.write(`<div>`);
    document.write(`<ul>`);
    for (let i = 0; i < arrElements.length; i++){
        document.write(`<li> ${ arrElements[i]} </li>`);
    }
    document.write(`</ul>`);
    document.write(`</div>`);
}
listElements([45,6,4,'dfgdfg',false,45,'rtyrty',true,false,5454,'sdfss'])

 */

// --------------при даному розвязку всі елементи записуються в новий масив-----------------------

/*
function listElements(arrElements = []) {
    let arrTotal = [];
    for (let i = 0; i < arrElements.length; i++){
        arrTotal.push(arrElements[i]);
    }
    console.log(arrTotal);
}
listElements([45,6,4,'dfgdfg',false,45,'rtyrty',true,false,5454,'sdfss'])
*/

//-------------------------при даному розвязку - кожному елементу задається масив-------------------------------
/*
function listElements(arrElements = []) {
    for (let i = 0; i < arrElements.length; i++){
        let arrTotal = [arrElements[i]];
        console.log(arrTotal);
    }
}
listElements([45,6,4,'dfgdfg',false,45,'rtyrty',true,false,5454,'sdfss'])
 */

//---------------------------------------ДОП---------------

//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/* EXAMPLE:
 foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
 foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
 foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
 */
/*
function foo(arrA = [], b) {
    let srrNew = [];
    for (let i = 0; i < arrA.length; i++) {
        if (i === b) {
            srrNew.push(arrA[i + 1]);
            srrNew.push(arrA[i]);
            i++;
        } else if (i !== b)
            srrNew.push(arrA[i]);
    }
    document.write(`${srrNew} <br>`)
}
foo([9, 8, 0, 4], 0);
foo([9, 8, 0, 4], 1);
foo([9, 8, 0, 4], 2);
*/
//------------------------------------------------------------------------------------------------------------------

/*
  - Дано список імен.
  let n1 = '    Harry       Potter      '
  let n2 = '    Ron       Whisley      '
  let n3 = '    Hermione       Granger      '
  Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
  let n1 = 'Harry Potter'
  let n2 = 'Ron Whisley'
  let n3 = 'Hermione Granger'
   */

/*
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '

function normName(name) {
    name = name.trim()
    let nameArr = name.split('');

    for (let i = 0; i < nameArr.length;) {
        if (nameArr[i] === ' ' && nameArr[i + 1] === ' ' ) {
            nameArr.splice(i, 1);       //  елементи зміщуються вліво
        } else {
            i++;  //  переходимо на наступну ітерацію
        }
    }

    let normName = nameArr.join('');
    console.log(normName);
}

normName(n1);
normName(n2);
normName(n3);
*/




//--------------------------------------------------------------------------------------------------------------------
/* Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
Зберігаючи при цьому порядок не нульових значень.

Двожина масиву від 2 до 100
EXAMPLE:
    [1,0,6,0,3] => [1,6,3,0,0]
    [0,1,2,3,4] => [1,2,3,4,0]
    [0,0,1,0]   => [1,0,0,0]

 */

/*
function arrDeleteZero(arrDat =[]) {
let a = [];
    for (let i = 0; i < arrDat.length; i++) {
        if (arrDat [i] === 0){
           let b = arrDat.splice(i,1);
           a.push(b);
           i = i -1;
        }
    }
    arrDat.push(a);
    document.write(`${arrDat} <br>`);
}
arrDeleteZero([1,0,0,3,5,0,0,0,2,3,4]);
arrDeleteZero([0,1,2,3,4]);
arrDeleteZero([0,0,1,0]);
*/



