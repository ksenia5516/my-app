import React from 'react';
import './Confirmation.css';
import Button from '../../components/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import TumblerSwitch from '../../components/TumblerSwitch'
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';


const Confirmation = () => {
    const { theme, onChangeTheme = () => {} } = useThemeContext();
    const isLightTheme = theme === Theme.Light;
    const location: any = useLocation();
    console.log(location.state.email);
    
    const onHomeClick = () => {
      localStorage.setItem("isLoggedIn", "true");
      window.location.replace("/cards-list");
    };

    return (
      <div className={classNames( {['confirmation']:isLightTheme}, {['confirmationDark'] : !isLightTheme})}>
          <TumblerSwitch/>
        <h1 className="confirmationTitle">Registration Confirmation</h1>
        <div className="confirmationMessage">
          <p>Please activate your account with the activation link in the
          email{''} <Button className='btnLink' btnText={location?.state?.email ?? ''} />  Please, check your email</p>
        </div>
        <Button className='btnConfirmation' btnText='Home' onClick={onHomeClick}/>
      </div>
    );
  };
  
export default Confirmation;