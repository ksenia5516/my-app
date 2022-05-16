import React, {FC}  from "react";

// HOMEWORK

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type User = { 
    name: string,
    phone: number,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean }

    const users: User[] = [
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

// 1. Создать строку из имен пользователей через запятую

type StringUsers = ( users: User[]) => string
const stringUsers: StringUsers = (users) => {
    let names = ""
    users.forEach((i) => {
        names += `${i.name}, `
    })
    console.log(names)
    return names;
}
stringUsers(users)

// 2. Посчитать общее количество машин у пользователей

type CountCars = (users:User[]) => number
const countCars: CountCars = (users) => {
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

type HaveEducation = (users: User[]) => User[]
const haveEducation: HaveEducation = (users) => {
    let usersEduc = users.filter((users) => users.hasEducation)
    console.log(usersEduc)
    return usersEduc
}
haveEducation(users)

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

type HavePets = (users:User[]) => User[]
const havePets: HavePets = (users) => {
    let usersPets = users.filter((users) => users.animals)
    console.log(usersPets)
    return usersPets
}
havePets(users)

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type StringCars = (users:User[]) => string
const stringCars: StringCars = (users) => {
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
