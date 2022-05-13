import React  from 'react';
import './Input.css';

const Input = (props:any) => {
    return <input value={props.value} type = {props.type} className = {props.className} required= {props.required} onChange={props.onChange}/> 
  
};

export default Input