import React,{FC} from "react";

import CardPost from "../CardPost";
import { Link } from "react-router-dom";
import {Card } from "..//..//common//types"

const CardList = (props: any) => {
  const onCardClick = (item: Card) => {} 
  const CardLists = props.data.map((item: any) => {
    return (
      <Link key={item.id} to={`/cards-list/${item.id}`}>
        <CardPost
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
          onclick = {() => onCardClick(item)}
        />
      </Link>
    );
  });
  return <div className="list">{CardLists}</div>;
};

export default CardList;