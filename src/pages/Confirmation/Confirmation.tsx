import React from 'react';
import './Confirmation.css'
import Button from "../../components/Button";
import { useLocation } from 'react-router-dom'

const Confirmation = (prors:any) => {

    const location: any = useLocation()
    const onHomeClick = () =>{ localStorage.setItem("isLoggerIn", "true")
window.location.replace("/card-list")
}
    
return (
    <div className="confirmation">
        <h2 className="confirmationTitle">Registration Confirmation</h2>
        <p className="confirmationText">Please activate your account with the activation link in the email
           {" "} <Button className={"btnLink"} value={location?.state?.email??' '}/>
        Please check your email
</p>
<Button text={'Home'}></Button>
    </div>
)
};
export default Confirmation;