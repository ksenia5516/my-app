import React, {FC}  from "react";
import './CardPost.css'
import classNames from 'classnames';

type CardPostType = {
  id?: string
  image?: string
  title: string
  text: string
  date: string
  
  }
const CardPost: FC <CardPostType> =  ({id, image, title, text, date}) => {
  
    const img ="https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453_1280.jpg";
return (

  <div className='postCard' key={id}>
      <img src={image ? image : img} className="imgCard" alt=''/>
      <p className="titleCard">{title}</p>
      <p className="textCard">{text}</p>
      <p className="datteCard">{date}</p>
  </div>
)
}

export default CardPost;
