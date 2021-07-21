

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

