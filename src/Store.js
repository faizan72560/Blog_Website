import { configureStore } from "@reduxjs/toolkit";
import { BlogReducer, GetBlogReducer, ViewBlogReducer } from "./Components/reducers/Blogreducer";


const store=configureStore({
    reducer:{
       blog:BlogReducer,
       getblog:GetBlogReducer,
       viewblog:ViewBlogReducer
        // myPlaces:getPlaceReducer
        // postOfFollowing: postOfFollowingReducer,
        // createPost:createNewPost,
        // allUsers: allUsersReducer,
        // myposts:myPostsReducer
    
    }
    , middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),   

    })

export default store