import {configureStore, combineReducers} from "@reduxjs/toolkit"  
import postsReducer from "./reducers/postsReducer";



  function counterReducer(state = { value: 0 }, action: any) {
    switch (action.type) {
      case "counter/incremented":
          console.log("PLUS")
        return { value: state.value + 1 };
      case "counter/decremented":
        console.log("MINUS")
        return { value: state.value - 1 };
      default:
        return state;
    }
  }
  const rootReducer = combineReducers({counterReducer,  posts: postsReducer, })


  export const store = configureStore({
    reducer: rootReducer,
  });