import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";
import "./Registration.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { Navigate, useNavigate } from 'react-router-dom'

//const Registration: FC<> = ({onClick,onConfirmClick,})

type RegistrationForm = {
  onClick: () => void;
  onConfirmClick: () => void;
}

const Registration: FC<RegistrationForm> = ({
  onClick,
  onConfirmClick,
}) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
    const navigate = useNavigate()
    const [email, setEmail] = useState ('');
    const [password, setPass] = useState ('');
    const [emailError, setEmailError] = useState ('');
    const [passwordError, setPassError] = useState ('');
    const [formValid, setFormValid] = useState (false);
    const [passwordConfirm, setPassConfirm] = useState ('');
    const [passwordErrorConfirm, setPassErrorConfirm] = useState ('');
    
    useEffect(()=> {
    if (emailError || passwordError) {
        setFormValid(false)
    } else {
        setFormValid (true)
    }
    
    }, [emailError, passwordError])
    
    const emailValid = (event: any) => {
        event.preventDefault();
        setEmail(event.target.value)
        if (
        !String(event.target.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ){
         setEmailError('E-mail isnt correct')
        } else {
            setEmailError ('')
        }
    };
    
    const passValid = (event: any) => {
        event.preventDefault ();
        setPass(event.target.value);
        const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!result.test((event.target.value))) {
           setPassError ('Password must contain at least 8')
        }
         else {
           setPassError ('')
        }
    }

    const passValidConfirm = (event:any) => {
        
        event.preventDefault();
        setPassConfirm(event.target.value);
if (setPass(event.target.value) != setPassConfirm(event.target.value)){
    setPassErrorConfirm('Passwords dont match')
} else {
    setPassErrorConfirm('')
}
    }
  onConfirmClick = () => {
        navigate("/confirm",  {
            state: {
              email,
            },
          });
    };
  return (
    <div
      className={classNames("registration", {
        ["darkContainer"]: !isLightTheme,
      })}>
     <form className="login-form">
    
    <div>
        <p>User name</p>
        <Input type='text' required='required'/>
    </div>
    <div>
        <p>Email</p>
        <Input type='email' required='required' value={email} onChange={emailValid} />
        {emailError && <div className='err'>{emailError}</div>}
    </div>
    <div>
        <p>Password</p>
        <Input type='password' required='required' value={password} onChange={passValid}/>
        {passwordError && <div className='err'>{passwordError}</div>}
    </div>
    <div >
        <p>Confirm Password</p>
        <Input type='password' required='required'value={passwordConfirm} onChange={passValidConfirm}/>
        {passwordErrorConfirm && <div className='err'>{passwordErrorConfirm}</div>}
    </div>
    <div >
        <Button disabled={!formValid} className='btnLoginConfirm' btnText='Login' onClick={onConfirmClick}/>
    </div>
</form>
<div className="login-forgot">
    <p className="login-forgot-text">If you have account you can</p>
    <Button  className="btnLink" btnText='Login' onClick={() => onClick('login')}/>
</div>
    </div>
  );
};
};
export default Registration;
