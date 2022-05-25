'use strict'

// const countries = [{
//         country: "United Arab Emirates",
//         abbreviation: "AE",
//         city: "Abu Dhabi",
//         currency_name: "Arab Emirates Dirham",
//         population: 9630959

//     },
//     {
//         country: "Poland",
//         abbreviation: "PL",
//         city: "Warszawa",
//         currency_name: "Polish Zloty",
//         population: 37974750
//     },
//     {
//         country: "Russian Federation",
//         abbreviation: "RU",
//         city: "Moscow",
//         currency_name: "Russian Ruble",
//         population: 144478050
//     }
// ]

// // 1. Создать строку из названий стран через запятую

// const stringsConcat = (countries) => {
//     let names = ""
//     countries.forEach((i) => {
//         names += `${i.country}, `
//     })
//     console.log(names)
//     return names;
// }
// stringsConcat(countries)

// // 2. Посчитать общее количнство людей в данном массиве стран.

// const countPeople = (countries) => {
//     let count = 0
//     countries.forEach((i) => {
//         count += i.population
//     })
//     console.log(count)
//     return count
// }
// countPeople(countries)

// // 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.

// const sortCountry = (countries) => {
//     let names = countries.sort((a, b) => (a.country > b.country ? 1 : -1))
//     console.log(names)
//     return names;
// }
// sortCountry(countries)

// // 4. Получить массив валют.

// const currCoutry = (countries) => {
//     let names = ''
//     countries.forEach((i) => {
//         names += `${i.currency_name}, `
//     })
//     console.log([names])
//     return names;
// }
// currCoutry(countries)

// // 5. Получить массив городов, отсортированных в алвавитном порядке.

// const sortCity = (countries) => {
//     let names = countries.map((a) => a.city).sort()
//     console.log(names)
//     return names;
// }
// sortCity(countries)

// // 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

// const averagePeople = (countries) => {
//     let count = 0
//     countries.forEach((i) => {
//         count += i.population / countries.length
//     })
//     console.log(count)
//     return count
// }
// averagePeople(countries)


//////////////// HOMEWORK /////////////

const users = [{
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi", "hgbgf"],
        hasChildren: true,
        hasEducation: false
    }
]

// 1. Создать строку из имен пользователей через запятую
const stringUsers = (users) => {
    let names = ""
    users.forEach((i) => {
        names += `${i.name}, `
    })
    console.log(names)
    return names;
}
stringUsers(users)

// 2. Посчитать общее количество машин у пользователей

const countCars = (users) => {
    let car = 0
    users.forEach((i) => {
        if (i.cars) {
            car += i.cars.length
        } else i
    })
    console.log(car)
    return car
}
countCars(users)

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

const haveEducation = (users) => {
    let usersEduc = users.filter((users) => users.hasEducation)
    console.log(usersEduc)
    return usersEduc
}
haveEducation(users)

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const havePets = (users) => {
    let usersPets = users.filter((users) => users.animals)
    console.log(usersPets)
    return usersPets
}
havePets(users)

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const stringCars = (users) => {
    let haveCars = ""
    users.forEach((i) => {
        if (i.cars) {
            haveCars += `${i.cars},`
        } else i
    })
    console.log(haveCars)
    return haveCars
}
stringCars(users)