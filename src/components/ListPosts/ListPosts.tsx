import React from "react";
import './ListPosts.css'

const ListPosts = (props:any) => {
    
    return (
        <div className = "posts"> 
            <img src={props.image} alt="no" className = "image"/>
        <h1 className = "title" >{props.title}</h1>
        <p className = "text"> {props.text}</p>
        <p className = "date"> {props.date}</p>
        </div>
    
    );
};
const Cards = (props: any) => {
    const card = props.data.map((item: any) => {
      return (
        <ListPosts className="pos"
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      );
    });
  
    return <div className="pos">{card}</div>;
  };
export default Cards;
