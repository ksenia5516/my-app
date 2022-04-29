import React from "react";
import classNames from "classnames";
import "./Registration.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Theme, useThemeContaxt } from "../../context/themeModeContext";

//const Registration: FC<> = ({onClick,onConfirmClick,})

const Registration = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContaxt();
  const isLightTheme = theme === Theme.Light;
  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
  };
  return (
    <div
      className={classNames("registration", {
        ["darkContainer"]: !isLightTheme,
      })}
    >
      <div className="registrationTitle">
        <div onClick={onClickTheme} className="themeButton">
          Change Theme
        </div>
        <div>
          <h3 className="registrationLogin">Login</h3>
        </div>
        <h3 className="registrationReg">Registration</h3>
      </div>
      <form>
        <label htmlFor="name">User name</label>
        <Input id="name"></Input>
        <label htmlFor="email">E-mail</label>
        <Input id="email"></Input>
        <label htmlFor="password">Password</label>
        <Input id="password"></Input>
        <label htmlFor="confirmPassword">Confirm password</label>
        <Input id="confirmPassword"></Input>
      </form>
      <Button text={"Login"}></Button>
      <p>
        If you have account your can <span>Login</span>
      </p>
    </div>
  );
};

export default Registration;
