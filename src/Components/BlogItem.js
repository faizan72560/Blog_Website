import React from 'react'
import { getBlog,loading, viewBlog } from './action/Blogaction'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const BlogItem = () => {
    const { getblog, loading } = useSelector((state) => state.getblog)
    console.log(getblog)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const viewbloghandler=(id)=>{
        localStorage.setItem('id',id)
        // dispatch(viewBlog(id))
        navigate('/Blog',{replace:true})
        

    }

  return (
    <div className='container2 my-5'>
        {
            

           getblog&& getblog.map((elem,index)=>{
            return(
                
                <div className='container1' key={elem._id}>
                        <div className="card" style={{ width: '18rem' }} >
                            <div className="card-body">
                                <h5 className="card-title">{elem.title}</h5>
                                <p className="card-text">{elem.text}</p>
                                <button className='btn btn-primary'  onClick={()=>{viewbloghandler(elem._id)}}>View</button>

                            </div>
                        </div>
                    </div>
            
            )
           })
           
            
        }

    </div>
  )
}

export default BlogItem