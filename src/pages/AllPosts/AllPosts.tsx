import React from 'react';
import './AllPosts.css';
import CardPost from '..//..//components//CardPost'; 
import { useParams } from 'react-router-dom';
import { Theme, useThemeContext } from '../../context/themeModeContext';
import classNames from 'classnames';


const AllPosts = () => {
  const {theme, onChangeTheme = () => {}} = useThemeContext();
  const isLightTheme = theme ===Theme.Light;

  const date = [
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2022/04/08/06/36/rock-7118843_1280.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
        date: "2022-04-20",
        title: "Lorem",
      
      },
      {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2022/04/04/18/17/sunset-7112018_1280.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
        date: "2022-04-20",
        title: "Lorem",
       
      },
      {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2021/12/11/07/50/forest-6862143_1280.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
        date: "2022-04-20",
        title: "Lorem",
      },
      {
        id: 4,
        image: "https://cdn.pixabay.com/photo/2022/02/23/09/46/woman-7030387_1280.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
        date: "2022-04-20",
        title: "Lorem",
      },
      {
        id: 5,
        image: "https://cdn.pixabay.com/photo/2022/04/18/13/34/beach-7140587_1280.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.",
        date: "2022-04-20",
        title: "Lorem",
      },
    ]

   const {id} = useParams ();
  
   const newItem = date.find((post:any) => post.id == id)

    return (
      <div className={classNames( {['allPostsContainer']:isLightTheme}, {['allPostsContainer dark'] : !isLightTheme})}>
        <div className="contentTitle">Content title</div>
        <div className="cardPostContent">
        {newItem && <CardPost key={id}
                     image={newItem.image}
                     title={newItem.title}
                     text={newItem.text}
                     date={newItem.date} 
                    /> }
        </div>
      </div>
    );
};
  
export default AllPosts;