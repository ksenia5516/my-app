import React, {FC} from 'react';
import './App.css';
import Button from './/components/Button'
import CardPost from './components/CardPost'
import Input from './components/Input'
import Template from './pages/Template';
import Login from './pages/Login';
import Registration from './pages/Registration'
import PageOneCard from './pages/PageOneCard'
import Confirmation from './pages/Confirmation'
import { ThemeModeProvider} from './context/ThemeModeProvider'
import { Theme } from './context/themeModeContext'
import {useState} from 'react';
import Router from './pages/Router';
import classNames from 'classnames';
import { Provider} from 'react-redux'
import { store } from "./redux/store";

function App() {
  // const [theme, setTheme] = useState (Theme.Light)
  // const isLightTheme = theme ===Theme.Light;
  // const onChangeTheme = (value: Theme) => {
  // setTheme(value);
  //}
    return (
    <Provider store = {store}></Provider>)
    //(
  // <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
  //  <div className='App'>
  // <Router/>
  // </div>
  // </ThemeModeProvider>
   // );
//  }
  // const [theme, setTheme] = useState(Theme.Light)
  // const onChangeTheme = (value: Theme) => {
  //   setTheme(value);
  };
//   return (
// <ThemeModeProvider theme = {theme} onChangeTheme = {onChangeTheme}>
  
//     <Registration/>
// <Router></Router>
// </ThemeModeProvider>
//   )

    //<Template></Template>)
   
//   const post = [
  //   {
  //     id: 1,
  //     image: "https://cdn.pixabay.com/photo/2022/04/08/06/36/rock-7118843_1280.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
  //     date: "2022-04-20",
  //     title: "Lorem",
    
  //   },
  //   {
  //     id: 2,
  //     image: "https://cdn.pixabay.com/photo/2022/04/04/18/17/sunset-7112018_1280.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
  //     date: "2022-04-20",
  //     title: "Lorem",
     
  //   },
  //   {
  //     id: 3,
  //     image: "https://cdn.pixabay.com/photo/2021/12/11/07/50/forest-6862143_1280.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
  //     date: "2022-04-20",
  //     title: "Lorem",
  //   },
  //   {
  //     id: 4,
  //     image: "https://cdn.pixabay.com/photo/2022/02/23/09/46/woman-7030387_1280.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
  //     date: "2022-04-20",
  //     title: "Lorem",
  //   },
  //   {
  //     id: 5,
  //     image: "https://cdn.pixabay.com/photo/2022/04/18/13/34/beach-7140587_1280.jpg",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
  //     date: "2022-04-20",
  //     title: "Lorem",

  //   },
  // ];
//   return <Cards data={post} />;
//  }
