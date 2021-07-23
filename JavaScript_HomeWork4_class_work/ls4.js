

//----------------------------------------classwork-------------------------------------


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

/*
class Client {
    constructor(id,name,surname,email,phone,order=[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(123,'vasa','vaysan','sdjkfh@sd.com',85654123,['wqq','dfg','dgdg','sdf','sdf','uyou','fghh','yui']);
let client2 = new Client(124,'vita','karat','cvbbh@sd.com',845641523,['wqq','dfg']);
let client3 = new Client(126,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', 'вапп','fgdfg','vxcv']);
let client4 = new Client(127,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', 'dfgd','sdf','sdf','uyou','vxcv']);
let client5 = new Client(128,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', ']','vxcv']);
let client6 = new Client(129,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', 'sdf','sdf','uyou','vxcv']);
let client7 = new Client(130,'dart','qabh@sd.com',849863254,['wqq','dfg','fgfg','vxcv']);
let client8 = new Client(131,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', ']','vxcv']);
let client9 = new Client(132,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', ']','vxcv','sdfsf','sdfsdf','sdfsdf']);
let client10 = new Client(132,'Yuriu','dart','qabh@sd.com',849863254,['wqq','dfg', ']','sdf','sdfss','vxcv']);

let clisentSort = [];
clisentSort.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
clisentSort.sort(function (a, b) {
    return a.order.length - b.order.length;
})
console.log(clisentSort);

*/

//----------------------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



/*
function Car (model, manufacturer, yearin, maxSpeed, motorV) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearin = yearin;
    this.maxSpeed = maxSpeed;
    this.motorV = motorV;

    this.drive = function () {
        console.log(`їдемо зі швидкістю (${this.maxSpeed}) на годину`);
    }

    this.info = function () {
        console.log(`information about the car, model -(${this.model}),manufacturer - ${this.manufacturer}, yearin- ${this.yearin}, maxSpeed - ${this.maxSpeed}, motorV- ${this.motorV}`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`old speed + new = ${this.maxSpeed + this.newSpeed}`)
    }

    this.changeYear = function (newYaer){
        this.yearin = newYaer;
        console.log(`міняємо рік випуску ${newYaer}`);
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let bmwCar = new Car(535,'BMW',2021,340,3.5);
bmwCar.drive();
bmwCar.info();
bmwCar.increaseMaxSpeed(50)
bmwCar.changeYear(2022);
bmwCar.addDriver({name: 'Batmen', age: 35, experience: 15})
console.log(bmwCar);
*/


/*
class Car {
    constructor(model, manufacturer, yearin, maxSpeed, motorV) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearin = yearin;
        this.maxSpeed = maxSpeed;
        this.motorV = motorV;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info () {
        console.log(this)
        //console.log(`information about the car, model -${this.model},manufacturer - ${this.manufacturer}, yearin- ${this.yearin}, maxSpeed - ${this.maxSpeed}, motorV- ${this.motorV}`)
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear (newYaer) {
        this.yearin = newYaer;
    }

    addDriver (driver) {
        this.driver = driver;
    }
}

let bmwCar = new Car(535,'BMW',2021,340,3.5);
console.log(bmwCar);
bmwCar.increaseMaxSpeed(50);
bmwCar.changeYear(2022);
bmwCar.addDriver({name: 'Batmen', age: 35, experience: 15});
bmwCar.info();
*/
//--------------------------------------------------------------------------------------------------------------------------------
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

/*
class Cinderellas {
    constructor(name,age,footN) {
        this.name = name;
        this.age = age;
        this.footN = footN;
    }
}

let cinderella1 = new Cinderellas('Olga',15,31);
let cinderella2 = new Cinderellas('Kamila',16,32);
let cinderella3 = new Cinderellas('Lysi', 17, 33);
let cinderella4 = new Cinderellas('Diana',18,34);
let cinderella5 = new Cinderellas('Angelina',19,35);
let cinderella6 = new Cinderellas('Anna',20,36);
let cinderella7 = new Cinderellas('Rosa',27,37);
let cinderella8 = new Cinderellas('Alba',28,38);
let cinderella9 = new Cinderellas('Nuria',29,39);
let cinderella10 = new Cinderellas('cristina',30,40);

let cinderellaAll = [];
cinderellaAll.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
console.log(cinderellaAll);
class Prince extends Cinderellas{

}
let princ = new Prince('Garold',35, 37)

for (const cinderella of cinderellaAll) {
    if (princ.footN === cinderella.footN){
        console.log(`${princ.name}..._...${princ.footN},...I to be with the prince ${cinderella.name}.._..${cinderella.footN}`);
    }
}
let cinderela = cinderellaAll.find(cinderelaItems => cinderelaItems.footN === princ.footN);
alert(cinderela.name);
console.log(cinderela.name, cinderela.footN);

 */







