
//                              - створити функцію яка приймає масив та виводить його

/*
function arrData (ArrOut = []) {
    document.write(`${ArrOut}`);
    console.log(ArrOut);
}
arrData([2,5,6,4,78,9,50])

*/
//-------------------------------------------------------------------------------------------------------------------

//                  - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*

function MinOfThree (a, b, c) {
    if (a < b && a < c){
        console.log(a);
    }
    else if (b < a && b < c ){
        console.log(b);
    }else {
        console.log(c);
    }
}
MinOfThree(17,5,10)
*/

//-------------------------------------------------------------------------------------------------------------------

//              - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


/*
function MinOfThree (a, b, c) {
    if (a > b && a > c ){
        console.log(a);
    }
    else if (b > a && b ){
        console.log(b);
    }else {
        console.log(c);
    }
}
MinOfThree(17,5,20)
*/

//-------------------------------------------------------------------------------------------------------------------


//                              - створити функцію яка повертає найбільше число з масиву

/*
function arrData (ArrOut = []) {
    let min = ArrOut[0];
    for (const a of ArrOut) {
        if( a > max){
            max = a;
        }

    }
    document.write(`${max}`);
    console.log(max);
}
arrData([2,5,6,4,78,9,50])
*/

//-------------------------------------------------------------------------------------------------------------------


//                      - створити функцію яка повертає найменьше число з масиву

/*
function arrData (ArrOut = []) {
    let min = ArrOut[0];
    for (const a of ArrOut) {
        if( a < min){
            min = a;
        }

    }
    document.write(`${min}`);
    console.log(min);
}
arrData([12,5,6,4,78,-11,1,9,50,3])

*/
//-------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*
function arrSum (ArrOut = []) {
    let suma = 0;
    for (const a of ArrOut) {
        suma = suma + a;
    }
    document.write(`${suma}`);
    console.log(suma);
}
arrSum([12,5,6,4,78,-11,1,9,50,3])
*/

//-------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*
function arrSum (ArrOut = []) {
    let suma = 0;
    for (const a of ArrOut) {
        suma = suma + a;
    }
    let k = ArrOut.length;
    seredneAref = suma / k;
    document.write(`${seredneAref}`);
    console.log(seredneAref);
}
arrSum([12,5,6,4,78,-11,1,9,50,3])
*/
//-------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.

// Створюємо масив із 10 чисел і заповнюємо рандом числами

/*
function arrRandom (a) {
    let j = []
    for (let i = 0; i < a; i++) {
        j [i] = Math.round(Math.random()*100);
    }
    console.log(j);
    return j
}
arrRandom(10);

let arrList = arrRandom(10)

//-функцію яка приймає масив вище вказаний чисел та повертає середнє арифметичне його значень

function arrSum (ArrOut = []) {
    let suma = 0;
    for (const a of ArrOut) {
        suma = suma + a;
    }
    let k = ArrOut.length;
    seredneAref = suma / k;
    console.log(seredneAref);
}
arrSum(arrList)

*/


//-----------------------------------------------------------------------------------------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
/*

function Keys(dataArr = []) {
let keys = [];
    for (const dataArrElement of dataArr) {
        for (const key in dataArrElement) {
            keys.push(key)
        }
    }
    console.log(keys);
}
Keys( [{name: 'Dima', age: 13}, {model: 'Camry'},{status: 'Student', Skils: 'JS'}])
*/


//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


/*
function Keys(dataArr = []) {
    let keys = [];
    for (const dataArrElement of dataArr) {
        for (const key in dataArrElement) {
            keys.push(dataArrElement[key])
        }
    }
    console.log(keys);
}
Keys( [{name: 'Dima', age: 13}, {model: 'Camry'},{status: 'Student', Skils: 'JS'}])
*/