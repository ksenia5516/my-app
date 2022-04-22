import React from 'react'
import './Button.css'

const Button = (props:any) => {
return (<button className={props.className}>{props.btn}Кнопка</button>)
}

export default Button