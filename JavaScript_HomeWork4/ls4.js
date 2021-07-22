

    // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
/*
function ArrRandon(arrLong) {
    let randomNambers = []
    for (let i = 0; i < arrLong; i++) {
        randomNambers [i] = Math.round(Math.random()*100);
    }
    console.log(randomNambers);
    return randomNambers;
}
ArrRandon(10)
*/

    //--------------------------------------------------------------------------------------------------------

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
/*
    function arrRandom(arrLong, arrRange) {
      let randNambers = [];
      for (let i = 0; i < arrLong; i++) {
        randNambers [i] = Math.round(Math.random()*arrRange);
      }
      console.log(randNambers);
      return randNambers

    }
    arrRandom(30,200);
*/
// --------------------------------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
    // Відсортувати його за допомоги sort
/*
    let SortArr = arrRandom(10,100);
    console.log(SortArr);

    SortArr.sort(function(a, b) {
        return a - b;
    });
    console.log(SortArr);
*/
// --------------------------------------------------------------------------------------------------
    // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
    // відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
/*
let filterArr = arrRandom(15,100);

let farr = filterArr.filter(function (number){
        return number % 2 === 0;
})
    console.log(farr);
 */
    // --------------------------------------------------------------------------------------------------
    // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
    // за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

/*
    let dataArr = arrRandom(15,100);
    let mapArr = dataArr.map(function (items){
        return items + ''
    })
    console.log(mapArr);
*/

//------------------------------------------------------------------------------------------------------------
    // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
/*
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
    let user11 = new User(21, 'Petro', 'Perovskui', 'fsdfs@.com', 95623145)
    console.log(user11);

    // створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

    let user1 = new User(21, 'Petro', 'Perovskui', 'rfsdfs@.com', 95623145)
    let user2 = new User(45, 'Ivan', 'Kvas', 'efsdfs@.com', 95623145)
    let user3 = new User(8, 'Oleg', 'Ivanov', 'afsdfs@.com', 94623145)
    let user4 = new User(22, 'Misha', 'Kel', 'xfsdfs@.com', 95665145)
    let user5 = new User(78, 'Oksana', 'Rok', 'gfsdfs@.com', 95676145)
    let user6 = new User(12, 'Igor', 'Pero', 'hsdfs@.com', 96723145)
    let user7 = new User(31, 'Merri', 'Dar', 'fstdfs@.com', 98623145)
    let user8 = new User(42, 'Anna', 'Rak', 'rfsdfs@.com', 95623145)
    let user9 = new User(9, 'David', 'Boyko', 'ifsdfs@.com', 956298145)
    let user10 = new User(21, 'jordi', 'Rydui', 'ofsdfs@.com', 98923145)

    let users = [];
    users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
    console.log(users);

//-----------Відфільтрувати , залишивши тільки об'єкти з парними id (filter)
    let usersFilter = users.filter(function (id) {
        return id.id % 2 === 0;

    })
    console.log(usersFilter);

//---------------------Відсортувати його по id. по зростанню (sort)
    usersFilter.sort( function (a, b) {
        return a.id - b.id;
    })
    console.log(usersFilter);

 */



    //---------------------------------------------additional--------------------------------------------------------





    // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
    // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

    // {
    //     id: 1,
    //         name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz',
    //     address: {
    //     street: 'Kulas Light',
    //         street: 'Apt. 556',
    //         city: 'Gwenborough',
    //         zipcode: '92998-3874',
    //         geo: {
    //         lat: '-37.3159',
    //             lng: '81.1496'
    //     }
    // },
    //     phone: '1-770-736-8031 x56442',
    //         website: 'hildegard.org',
    //     company: {
    //     name: 'Romaguera-Crona',
    //         catchPhrase: 'Multi-layered client-server neural-net',
    //         bs: 'harness real-time e-markets'
    // }
    // }


    /*
    class UserData {
        constructor(id, username, email, addres, street, city, zipcode, geo, lat, lng, phone, website, company, name, catchPhrase, bs) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            this.addres = {street, city, zipcode, geo: {lat, lng} }
            this.phone = phone;
            this.website = website;
            this.company = {name, catchPhrase, bs};

        }
    }
    let user = new UserData(321, 'kalim', 'sdgv12135sd@gmail.com','adres','Shevchemka','Lviv',454-65,'location',-124.326,541.231,805492354,'www.tr.com','IBM','Sanya','sdcsd','sdcsd');
    console.log(user);
    */

    /*

    function Users(id, name, username, email, street, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {};
        this.address.street = street;
        this.address.city = city;
        this.address.zipcode = zipcode;
        this.address.geo = {}
        this.address.geo.lat = lat;
        this.address.geo.lng = lng;
        this.phone = phone;
        this.website = website;
        this.company = {};
        this.company.nameCompany = nameCompany;
        this.company.catchPhrase =catchPhrase;
        this.company.bs =bs;
    }

    let user = new Users(617,'Petr','Ivanov','jnjndf@.gmoail','Shevchenka','Lviv',123-54,-231-45.23,458.255,806954123,'www.dgdf.com','BM','client-server','asdad')
    console.log(user);
    */


    //-------------------------------------------------------------------------------------------------------------------
    /*
    class Users {
        constructor(id, name, username, email, street, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            this.address = {street, city, zipcode, geo:{lat,lng}};
            this.phone = phone;
            this.website = website;
            this.company = {nameCompany,catchPhrase,bs}
        }
    }
    let user = new Users(321,'Vasa','Rak','dsfgsg@gmail.com','Zaliznuchna','Lviv',45-3210,-142.321,326.104,9851236,'www.ruta.com','sony','boss','sdff');
    console.log(user);
    */

    //------------------------------------------------------------------------------------------------------------------

    // -  Створити функцію конструктор / клас  який описує об'єкт тегу
    // Поля :
    //     -назва тегу ()
    // - опис його дій
    // - масив з атрибутами (2-3 атрибути максимум)
    // Кожен атрибут описати як окремий який буде містити
    // -назву атрибуту
    // -опис дії атрибуту
    // інформацію брати з htmlbook.ru
    //
    // Таким чином описати теги
    // -a
    // -div
    // -h1
    // -span
    // -input
    // -form
    // -option
    // -select
    // Приклад результуючого об'єкту
    // {
    //     titleOfTag: 'area',
    //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    //     attrs: [
    //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    //     {/*some props and values*/},
    //     {/*...*/},
    //     {/*...*/},
    // ]
    //
    // // }


    /*
    class Tags {
        constructor(titleTag,action,attrs) {
            this.titleTag = titleTag;
            this.action = action;
            this.attrs = attrs;
        }
    }

    class Attrs {
        constructor(titleAttr,actiAttr) {
            this.titleAttr = titleAttr ;
            this.actiAttr = actiAttr;
        }
    }

    tag_a = new Tags('<a>','устанавливает ссылку или якорь.',
        [new Attrs('href','Задает адрес документа, на который следует перейти.'),
            new Attrs('download','Предлагает скачать указанный по ссылке файл.'),
            new Attrs('target','Имя окна или фрейма, куда браузер будет загружать документ.')])

    console.log(tag_a);

    */
