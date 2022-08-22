// Add New Blog
import axios from 'axios'
export const addNewBlog = ({title,text}) => async (dispatch) => {
    try {
        dispatch({type:"ADD_BLOG_REQUEST"});
        
        const config = {
            headers: {
                "Content-Type": "application/json",
              },
          };

          const obj={
            title,text
          }
          console.log(title,text)
      const { data } = await axios.post("/new/addblog",obj,config);
  


    //   console.log(data)
  
      dispatch({ type: "ADD_BLOG_SUCCESS", payload: data});
    } catch (error) {
      dispatch({
        type: "CREATE_ORDER_FAIL",
        payload: error
      });
    }
  };


  export const getBlog = () => async (dispatch) => {
    try {
        dispatch({type:"GET_BLOG_REQUEST"});
        
       
          
      const { data } = await axios.get("/getblog");
  


      console.log(data.blog)
  
      dispatch({ type: "GET_BLOG_SUCCESS", payload: data.blog});
    } catch (error) {
      dispatch({
        type: "GET_ORDER_FAIL",
        payload: error
      });
    }
  };

  
  export const viewBlog = (id) => async (dispatch) => {
    try {
        dispatch({type:"VIEW_BLOG_REQUEST"});
        console.log(id)
        
       
          
      const { data } = await axios.post(`/viewblog${id}`)
      
  


      console.log(data)
  
      dispatch({ type: "VIEW_BLOG_SUCCESS", payload: data.blog});
    } catch (error) {
      dispatch({
        type: "VIEW_ORDER_FAIL",
        payload: error
      });
    }
  };
  
  
  