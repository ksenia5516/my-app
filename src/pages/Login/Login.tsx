import React from "react";
import './Login.css';
import Input from "../../components/Input";
import Button from "../../components/Button";


const Login = ( ) => {
    return (
        <div className="login">
            <div className="loginTitle">
               <div><h3 className="loginLogin">Login </h3></div>
                <h3 className="loginRegistration"> Registation</h3>
            </div>
            <form>
                <label htmlFor="loginEmail">E-mail</label>
                <Input id="loginEmail"></Input>
                <label htmlFor="loginPassword">Password</label>
                <Input id="loginPassvord"></Input>
            </form>
            <Button text={'Login'}></Button>
        </div>
    )
};

export default Login;