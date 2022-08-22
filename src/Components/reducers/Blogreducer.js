import { createReducer } from "@reduxjs/toolkit";
const intialState={
  
  
}

export const BlogReducer = createReducer(intialState, {
    ADD_BLOG_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_BLOG_SUCCESS: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    },
    ADD_BLOG_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });


  
export const GetBlogReducer = createReducer(intialState, {
    GET_BLOG_REQUEST: (state) => {
      state.loading = true;
    },
    GET_BLOG_SUCCESS: (state, action) => {
      state.loading = false;
      state.getblog = action.payload;
    },
    GET_BLOG_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });

  
export const ViewBlogReducer = createReducer(intialState, {
  VIEW_BLOG_REQUEST: (state) => {
    state.loading = true;
  },
  VIEW_BLOG_SUCCESS: (state, action) => {
    state.loading = false;
    state.view = action.payload;
  },
  VIEW_BLOG_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
 
});