import React from "react";
import "./CardList.css";
import CardPost from "../CardPost";
import { Link } from "react-router-dom";

const CardList = (props: any) => {
  const CardLists = props.data.map((item: any) => {
    return (
      <Link key={item.id} to={`/cards-list/${item.id}`}>
        <CardPost
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      </Link>
    );
  });
  return <div className="list">{CardLists}</div>;
};

export default CardList;