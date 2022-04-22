import React from 'react';
import './Registration.css'
import Button from "../../components/Button";
import Input from "../../components/Input";

const Registration = () => {
    return (
        <div className="registration">
            <div className="registrationTitle">
                <div><h3 className="registrationLogin">Login</h3></div>
                <h3 className="registrationReg">Registration</h3>
            </div>
            <form>
                <label htmlFor="name">User name</label>
                <Input id='name'></Input>
                <label htmlFor="email">E-mail</label>
                <Input id='email'></Input>
                <label htmlFor="password">Password</label>
                <Input id='password'></Input>
                <label htmlFor="confirmPassword">Confirm password</label>
                <Input id='confirmPassword'></Input>
            </form>
            <Button text={'Login'}></Button>
            <p>If you have account your can <span>Login</span>
            </p>
        </div>
    )
};

export default Registration;