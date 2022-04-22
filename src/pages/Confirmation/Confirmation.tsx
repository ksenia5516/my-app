import React from 'react';
import './Confirmation.css'
import Button from "../../components/Button";

const Confirmation = (prors:any) => {
return (
    <div className="confirmation">
        <h2 className="confirmationTitle">Registration Confirmation</h2>
        <p className="confirmationText">Please activate your account with the activation link in the email
            <span>test@gmail.com</span>
        Please check your email
</p>
<Button text={'Home'}></Button>
    </div>
)
};
export default Confirmation;