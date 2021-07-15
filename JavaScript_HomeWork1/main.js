//1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let a = 'hello';
let b = "owu";
let c = 'com';
let d = "ua";

let q = 1;
let w = 10;
let e = -999;
let r = 123;
let p = 3.14;
let t = 2.7;
let y = 16;

let si = true;
let no = false;

//2. Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(p);
console.log(t);
console.log(y);

console.log(si);
console.log(no);

// document.write

document.write(`<h2>${a}</h2>`);
document.write(`<h2>${b}</h2>`);
document.write(`<h3>${c}</h3>`);
document.write(`<h3>${d}</h3>`);

document.write(q);
document.write(w);
document.write(e);
document.write(r);
document.write(p);
document.write(t);
document.write(y);

document.write(si);
document.write(no);

//3. Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

a = 55;
b = 7;

c = true;
d = false;
q = true;

w = "js";
e = "java";
r = "python";
p = "c++";
t = 'c';
y = "OWU";

si = -951;
no = 364.45;

//4.  Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(a);
console.log(b);

console.log(c);
console.log(d);
console.log(q);

console.log(w);
console.log(e);
console.log(r);
console.log(p);
console.log(t);
console.log(y);

console.log(si);
console.log(no);

// document.write

document.write(a);
document.write(b);

document.write(`<h3>${c}</h3>`);
document.write(`<h3>${d}</h3>`);
document.write(`<h3>${q}</h3>`);

document.write(`<h3>${w}</h3>`);
document.write(e);
document.write(r);
document.write(p);
document.write(t);
document.write(`<h3>${y}</h3>`);

document.write(si);
document.write(no);

//5. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

firstName = "Bodgan";
middleName = "Romanovych";
lastName = "Gavryliuk"

person = (`<h2>${firstName}, ${middleName}, ${lastName}</h2>`);
document.write(person);

person2 = firstName + " " + middleName + " " + lastName;
console.log(person2);

//6. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

name = prompt("your name");
mid_name = prompt("middleName");
age = prompt("your age");

//7. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

name1 = 'Bogdan';
middleName1 = 'Romanovych';
age1 = 33;

console.log("Вітаю"+" "+name1+" "+middleName1+" "+"Тобі"+" "+age1);
document.writeln(`Вітаю, ${name1} ${middleName1}, Тобі, ${age1}`);

//8. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
a = 100;
b = '100';
c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//9. Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
//   5 < 6 -> true
//   5 > 6 -> false
//   5 >= 6 -> false
//   5 == 6 -> false
//   10 === 10 -> true
//   10 == 10 -> true
//   10 > 10 -> false
//   10 < 10 -> false
//   10 =! 10 -> false
//   123 === '123' -> false
//   123 == '123' -> true

//10.Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 );    true
// console.log(99 > 100 && 45 > 12 );   false
// console.log(132 > 100 || 45 < 12 );  true
// console.log(111 > 11 || 45 < 111 );  true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); false
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );   true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );    false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));   true
// console.log(!!'-1'); true
// console.log(!!-1);   true
// console.log(!!'0');  true
// console.log(!!'null');   true
// console.log(!!'undefined');  false
// console.log(!!(3/'owu'));    false
// console.log((111 > 11 || 45 < 111) ||  !!'0');   true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));  false


console.log(132 > 100 && 45 < 12 );
console.log(34 > 33 && 23 < 90 );
console.log(99 > 100 && 45 > 12 );
console.log(132 > 100 || 45 < 12 );
console.log(111 > 11 || 45 < 111 );
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

