
import React from "react";
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import Header from '../../components/Header'
import Information from "../Information";
import PageOneCard from '../PageOneCard';
import Auth from "..//Auth";
import Confirmation from "../Confirmation";
import Registration from "../Registration";
import CardList from '..//..//components//CardList'


const Router = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
    <BrowserRouter>
    {isLoggedIn?(
        <Routes> 
        <Route path={'/'} element={<Header/>}>
            <Route path={'cards-list'} element={<CardList/>}/>
       
            <Route path={'info'} element={<Information/>}/>
            <Route path='*' element={<Navigate to="/" replace/>}/>
        </Route>
        </Routes>
     ) : ( 
     <Routes> 
         <Route  path={'/'} element={<Auth/>}/>
         <Route  path={'confirm'} element={<Confirmation/>}/>
     </Routes>  
     )}
    </BrowserRouter>
);
};

export default Router