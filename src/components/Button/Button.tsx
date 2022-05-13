import React, {FC} from 'react'
import './Button.css'

type Btn = {
    value?: string;
    disabled?: boolean;
    onClick?: () => void;
    className: string;
    btnText?: string;
  };
  
const Button: FC<Btn> = ({value, disabled, onClick, className, btnText}) => {
    return  <button value={value} type='submit' disabled={disabled} onClick={onClick} className={className}> {btnText} </button>
};

export default Button