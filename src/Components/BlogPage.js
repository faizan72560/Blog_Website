import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { viewBlog } from './action/Blogaction'
import { useEffect } from 'react'
import Loader from './Loader'

const BlogPage = () => {

    const {view,loading}=useSelector(state=>state.viewblog)
    console.log(view,loading)

    const dispatch=useDispatch()

    const viewhandler=()=>{

        const id=localStorage.getItem('id')
        dispatch(viewBlog(id))
        

    }

    useEffect(() => {

        viewhandler()
     
    }, [dispatch])
    
  return (
    <div className='container3 my-4'>
        {loading?<Loader/>:(
            
            <div className="card" style={{ width: '60vw',height: '60vh' }} >
                <div className="card-body">
                    <h1 className="card-title text-center display-1">{view && view.title}</h1>
                    <p className="card-text text-center display-6 my-7">{view && view.text}</p>
                </div>
            </div>
        
            

        )}
       
    </div>
  )
}

export default BlogPage