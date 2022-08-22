import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBlog } from './action/Blogaction'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import BlogItem from './BlogItem'






const Home = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBlog())


    }, [dispatch])
    const { getblog, loading } = useSelector((state) => state.getblog)
    console.log(getblog, loading)

    return (<div >


        {loading ? <Loader /> :

            <>
                <BlogItem />
            </>



        }


    </div>
    )
}

export default Home