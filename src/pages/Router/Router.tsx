import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'


const Router = () => {
    const isLoggedIn = true
    return ( <BrowserRouter>
    {isLoggedIn? (
    <Routes>
        <Route path = {"/"} element = {<PageHeader/>}>
        <Route path = {"cards-list"} element = {<Posts data = {post}/>}/>
        </Route>
    </Routes>) :
     (<Routes></Routes>)}
    </BrowserRouter>
    )
}
export default Router