import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewBlog } from './action/Blogaction'
import Alert from './Alert'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const AddBlog = () => {
    const [title, settitle] = useState('')
    const [text, settext] = useState('')
const [alert, setalert] = useState(false)

const {blog}=useSelector((state)=>state.blog)
console.log(blog)

    const dispatch=useDispatch()

    const addnewBlog=()=>{
        console.log(title,text)
        dispatch(addNewBlog({title,text}))
        setalert(true)
        setTimeout(()=>{
          setalert(false)
        },2000)
    }

   
    
  return (
    <div>{ alert && <Alert/>}
        <div className='container my-4'>

        <div className="mb-3">
  
  <input type="text" className="form-control" id="exampleFormControlInput1" value={title} placeholder="Add Title" onChange={(e)=>{settitle(e.target.value)}} />
</div>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={text}  placeholder="Text Area"  onChange={(e)=>{settext(e.target.value)}}></textarea>
</div>
<div className='mb-3'>
    <button className='btn btn-primary' onClick={addnewBlog}>Add Blog</button>

</div>
    </div>
        </div>
  )
}

export default AddBlog