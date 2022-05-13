import React, {FC}  from "react";

//1 тема
type User = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
    age: number
    }

type Users = Array<User>


const users: Users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    }
];

type Product = {
    id: number,
    name: string,
    price: number,
    currency: string,
    ingredients: string [],
    type: string,
    available: boolean
    }
type Products = Array<Product>

const products: Products = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true
    },
    {
        id: 2,
        name: "Burger Lite",
        price: "2,3",
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
];

type GetUser = (id:number, users:Users) => User | undefined

const getUser: GetUser = (id, users) => users.find((user) => user.id === id);

//////////////////////////////////////////////////////////////////////////////////////
   
    //2 тема
    // С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
    // 1. Создать строку из названий стран через запятую
    // 2. Посчитать общее количнство людей в данном массиве стран.
    // 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
    // 4. Получить массив валют.
    // 5. Получить массив городов, отсортированных в алвавитном порядке.
    // 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

type Country = {
    country: string,
    abbreviation: string,
    city: string,
    currency_name: string,
    population: number
}
    const countries: Country[]= [
        {
            country: "United Arab Emirates",
            abbreviation: "AE",
            city: "Abu Dhabi",
            currency_name: "Arab Emirates Dirham",
            population: 9630959
            
        },
        {
            country: "Poland",
            abbreviation: "PL",
            city: "Warszawa",
            currency_name: "Polish Zloty",
            population: 37974750
        },
        {
            country: "Russian Federation",
            abbreviation: "RU",
            city: "Moscow",
            currency_name: "Russian Ruble",
            population: 144478050
        }
    ]

// 1. Создать строку из названий стран через запятую
type StringsConcat = (countries: Country[]) => string

const stringsConcat: StringsConcat = (countries) =>{
let names =""
countries.forEach((i) => {
    names += `${i.country}, `
})
console.log(names)
return names;
}
stringsConcat(countries)

// 2. Посчитать общее количнство людей в данном массиве стран.

type CountPeople = (countries: Country[]) => number
const countPeople: CountPeople = (countries) => {
    let count = 0
    countries.forEach((i) => {
        count += i.population
    })
    console.log(count)
    return count
}
countPeople(countries)

 // 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.

 type SortCounty = (countries: Country[]) => Country[]
 const sortCountry: SortCounty = (countries) => {
    let names = countries.sort((a, b) => (a.country > b.country ? 1 : -1))
    console.log(names)
    return names;
}
sortCountry(countries)

// 4. Получить массив валют.

type CurrCounty = (countries: Country[]) => string[]
const currCoutry: CurrCounty = (countries) => {
    let names = ""
    countries.forEach((i) => {
        names += `${i.currency_name}, `
    })
    console.log([names])
    return names;
}
currCoutry(countries)

 // 5. Получить массив городов, отсортированных в алвавитном порядке.

 type SortCity = (countries: Country[]) => string[]
 const sortCity: SortCity = (countries) => {
    let names = countries.map((a) => a.city).sort()
    console.log(names)
    return names;
}
sortCity(countries)

// 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

type AveragePeople = (countries: Country[]) => number
const averagePeople: AveragePeople = (countries) => {
    let count = 0
    countries.forEach((i) => {
        count += i.population / countries.length
    })
    console.log(count)
    return count
}
averagePeople(countries)


//////////////////////////////////////////////////////////////////////////////////

// HOMEWORK

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type User2 = { 
name: string,
phone: number,
email: string,
animals?: string[],
cars?: string[],
hasChildren: boolean,
hasEducation: boolean }

type Users2 = User2[]

const users2: Users2 = [
    {
        name: "Harry Felton",
        phone: 098973333,
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
        
    },
    {
        name: "May Sender",
        phone: 098973333,
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: 098973333,
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]
