import React, { useState } from 'react';
import classNames from 'classnames';
import { Theme, useThemeContext } from '..//..//context//themeModeContext';
import './Auth.css';
import PageHeader from '../PageHeader';
import Login from '../Login';
import Input from '../../components/Input'
import Registration from '..//Registration'
import Confirmation from '../Confirmation';
import TumblerSwitch from '..//..//components//TumblerSwitch';

const Auth = () => {
  const {theme, onChangeTheme = () => {}} = useThemeContext();
  const isLightTheme = theme ===Theme.Light;

  const [tabName, setTabName] = useState ('login');
  const [isConfirmed, setConfirmed] = useState (false);
  const onButtonClick = (name: string) => {setTabName (name)};
  const onClickRegister = () => {setConfirmed(true)};
  
      return  (
        <div className={classNames( {['authWrapper']:isLightTheme}, {['authWapper dark'] : !isLightTheme})}>
      <TumblerSwitch/>
      <PageHeader onClick={onButtonClick} activeTab={tabName} />
  {tabName === 'login' ? (
      <Login onClick={onButtonClick} onConfirmClick={onClickRegister} />
  ):(
      <Registration onClick={onButtonClick} onConfirmClick={onClickRegister} />
  )}
       </div>
  )
      }  
  export default Auth