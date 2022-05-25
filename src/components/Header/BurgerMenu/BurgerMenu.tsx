import React from "react";
import { slide as Header } from "react-burger-menu";
import "./BurgerMenu.css";


export default (props: any) => {
  const onOutClick = () => {
    localStorage.setItem('isLoggedIn', '');
    window.location.replace('/') 
  }
  
  return (
    <Header> 
    <a className="menuItem" href="/all posts">
        All posts
    </a>
    <a className="menuItem" href="/my posts">
        My posts
    </a>
    <a className="menuItem" href="/add post">
        Add post
    </a>
    <a className="menuItem" href="/log out">
        Log out
    </a>
</Header>
  );
};