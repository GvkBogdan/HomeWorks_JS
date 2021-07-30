/*
Зробити свій розпорядок дня.

У вас має бути більше 10 асинхронних дій з рандомними затримками.
Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

Наприклад.
Прикнутись - 0.3с
зробити зарядку - 2с
Піти в душ - 0,5с
Поснідати - 1с
повчитись - 5с
поїхати в магазин - 2с
скупитись - 3с
обід - 2,5с
англійська - 3с
вечеря - 1,5с
сон - 7с
І так далі
 */


function dayTime(wakeUp) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('did I wake up ???');

            if (wakeUp < 600) {
                console.log('still asleep');
                reject(`sleep will continue - ${600 - wakeUp} min`) // завжди перший помидку, а остагній дані які передаємо в колбек

            } else {
                console.log('so I woke up');
                resolve('the day began')// завжди перший помилку, а остагній дані які передаємо в колбек
            }
        }, 800);
    })

}

function prepareCoffe() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('with great coffee');
            resolve('go go go');
        }, 300);
    });
}

function doExercise() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing exercises');
            resolve('I go to the shower');

        }, 2000)
    });
}

function haveShower() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' in the shower ');
            resolve('need to have breakfast');

        }, 500);
    });
}

function haveBreakfast(time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('will we have time for breakfast???');

            if (time > 1300) {
                console.log('did not have time to have breakfast on time......');
                reject(`now we don't have enough time to study = ${1000 - time}`);

            } else {
                console.log('wonderful breakfast.....');
                resolve('time to study');
            }

        }, 1300);
    });

}

function doStudy(weariness) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('the main thing is not to get tired of studying');

            if (weariness > 5000) {
                console.log('overfatigue');
                reject('brain explosion');

            } else {
                console.log('the training went well!!!!');
                resolve('we deserved something delicious.');
            }

        }, 5000);
    });
}

function doShopping(money) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I went to the supermarket but do we have the money....???');

            if (money < 3500) {
                console.log('we didn\'t have enough money....(((')
                reject('we go home without food');
            } else {
                console.log('we bought everything 100%');
                resolve('we return at home');
            }

        }, 2000);

    });

}

function studyEnglish() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('now we have enough energy ');
            resolve('we will study English');

        }, 3000);

    });

}

function haveSuper(money) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('try to order sushi and wine for the evening');

            if (money < 1000) {
                console.log('we dont have enough money');
                reject('we will drink tea and cookies');

            } else {
                console.log('we ordered, waiting for delivery');
                resolve(', waiting for delivery');
            }

        }, 2000);
    });
}

function sleepWell(timeSleep) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We must sleep at least 8 hours');

            if (timeSleep < 8) {
                console.log('we did not sleep good');
                reject('we will be evil in the morning');
            } else {
                console.log('The dream was wonderful.');
                resolve('we are full of energy');
            }
        });

    });

}

// dayTime(700);
// prepareCoffe();
// doExercise();
// haveShower();
// haveBreakfast(1000);
// doStudy(4000);
// doShopping(2000);
// studyEnglish();
// haveSuper(2000);
// sleepWell(9000);


/*
async function routineOfDay() {

    try {
        const time = await dayTime(700);
        console.log(time, 'the day began');

        const coffee = await prepareCoffe();
        console.log(coffee, 'my coffee');
        console.log('its all ok');

        const running = await doExercise();
        console.log(running, ' go  go go');

        const shower = await haveShower()
        console.log(shower, ' we prepare breakfast ');

        const breakfast = await haveBreakfast(1200);
        console.log(breakfast, 'After training we go to the supermarket');

        const study = await doStudy(4900);
        console.log(study, 'Go shopping!!!!');

        const shopping = await doShopping(5100);
        console.log(shopping, 'we are preparing lunch');

        const english = await studyEnglish();
        console.log(english, 'we have learned and can prepare for dinner, order sushi');

        const supper = await haveSuper(2000);
        console.log(supper, 'it was delicious. I will prepare for sleep');

        const goodNight = await  sleepWell(9);
        console.log(goodNight,'hello new day!');


    } catch (e) {

        console.log('EEERRROOOORRR');
        console.log(e);
    }
}

routineOfDay();
*/


/*
dayTime(700)

    .then((value) => {
        console.log(value)

        return prepareCoffe()
    })
    .then((value) => {
        console.log(value)

        return doExercise()
    })
    .then(value => {
        console.log(value)

        return haveShower()
    })
    .then(value => {
        console.log(value)

        return haveBreakfast(1000)
    })
    .then((value) => {
        console.log(value)

        return doStudy(4500)
    })
    .then(value => {
        console.log(value)

        return doShopping(4000)
    })
    .then(value => {
        console.log(value)

        return studyEnglish()
    })
    .then(value => {
        console.log(value)

        return haveSuper(2500)
    })
    .then(value => {
        console.log(value)

        return sleepWell(9000)
    })
    .then(value => {
        console.log(value)
    })

    .catch(reason => {
        console.log(reason)
    })

 */