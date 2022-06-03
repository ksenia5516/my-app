import React, {FC, useEffect} from 'react';
import './AllPosts.css';
import CardPost from '..//..//components//CardPost';
import { useParams, Link, NavLink } from 'react-router-dom';
import { Theme, useThemeContext } from '../../context/themeModeContext';
import classNames from 'classnames';
import CardList from '../../components/CardList';
import { useDispatch, useSelector } from 'react-redux';
import { loadData, PostsSelectors } from '..//..//redux//reducers//postsReducer'

const AllPosts = () => {
  const {theme, onChangeTheme = () => {}} = useThemeContext();
  const isLightTheme = theme ===Theme.Light;

  const MOCK = [
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
    const cardsList = useSelector((state) => PostsSelectors.getCards(state, ''))
      const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(loadData(MOCK))
    }, [])
    return (
      <div className={classNames( {['postsContainer']:isLightTheme}, {['postsContainer dark'] : !isLightTheme})}>
      <div className='postsTitle'>My posts</div>
         <CardList data = {CardList}/>
         </div>
     )
     }
  
export default AllPosts;