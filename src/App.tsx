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
import { store } from "./redux/store"
import Information from "./pages/Information";
import Auth from "./pages/Auth";
import Header from "./components/Header/";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const isLightTheme = theme === Theme.Light;
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <Provider store={store}>
      <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
        <div className="App">
          <Router />
        </div>
      </ThemeModeProvider>
    </Provider>
  );
}
export default App;