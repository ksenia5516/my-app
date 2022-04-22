import React from "react";
import './OneCard.css'

const OneCard = (props:any) => {
    return (
        <div className="oneCard">
            <img src = "https://cdn.pixabay.com/photo/2021/12/11/07/50/forest-6862143_1280.jpg" className="oneImg"></img>
            <h1 className = "oneCardTitle">{props.title}</h1>
<p className="oneCardText">{props.text}</p>
<p className="oneCardDate">{props.date}</p>
        </div>
    )
}
export default OneCard;