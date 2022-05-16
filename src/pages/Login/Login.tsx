import React, {FC, useEffect, useState } from 'react';
import './Login.css';
import Button from '..//..//components//Button';
import Input from '..//..//components//Input';
import {useDispatch, useSelector} from 'react-redux'

type LoginProps = {
    onClick: (name: string) => void;
    onConfirmClick: () => void;
}
const Login: FC<LoginProps> = ({
    onClick,
    onConfirmClick,
}) => {
const [userName, setUserName] = useState('');
const [email, setEmail] = useState ('');
const [password, setPassword] = useState ('');
const [emailError, setEmailError] = useState ('');
const [passwordError, setPasswordError] = useState ('');
const [formValid, setFormValid] = useState (false);

const dispatch = useDispatch();
const onClick = (isPlus: boolean) => {
    const PLUS_ACTION = { type: "counter/incremented" };
    const MINUS_ACTION = { type: "counter/decremented" };
    dispatch(isPlus ? PLUS_ACTION : MINUS_ACTION);
  };
const value = useSelector((state: any) => state.value)

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
    setPassword(event.target.value)
    const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!result.test((event.target.value))) {
       setPasswordError ('Password must contain at least 8')
    }
     else {
       setPasswordError ('')
    }
}
return ( 
    <form className="formLogin">
    <div className="formEmail">
        <p>Email</p>
        <Input  type='email' required='required' value={email} onChange={emailValid} />
        {emailError && <div className='err'>{emailError}</div>}
    </div>
    <div className="formPassword">
        <p>Password</p>
        <Input type='password' required='required' value={password} onChange={passValid} />
        {passwordError && <div className='err'>{passwordError}</div>}
    </div>
   
        <Button disabled={!formValid} className='btnLoginConfirm' btnText='Login' onClick={() => {}}  />

        <div className="passwordForgot">
    <p className="passwordForgotText">Forgot your password?</p>
    <a href="#reset" className="passwordForgotReset">Reset password</a>
</div>

<Button className="btm" value={"ПЛЮС"} onClick = {() => onClick} />
<Button className="btm" value={"МИНУС"} onClick = {() => onClick} />
<div style = {{fontSize: 20, fontWeight: 'bolt'}}>{value}</div>
</form>
)
}

export default Login
