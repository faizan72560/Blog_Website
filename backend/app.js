const express=require('express')
var mongoose = require('mongoose')
const { addblog } = require('./controller/blogcontroller')
const app=express()
app.use(express.json());
const BodyParser=require('body-parser')
const Router=express.Router()
const Blog=require('./model/model')
require("dotenv").config({ path: "./config.env" });
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server started on ${port}`)

})
app.use(BodyParser.urlencoded({ extended: true }));
require('./db/Db')
// require('./model/model')
// require('./controller/blogcontroller')


// Router.route('/new/addblog').post(addblog)

// router.get('/new/addblog', (req, res)=>{
    // const {title,text}=req.body
    // console.log(req.body)
    // const blog= await Blog.create({
    //     title,
    //     text
    // })

    // console.log(blog)
    // console.log('blog')


    // res.send({
    //     message:"blog Added Successfully",
    //     blog
    // })

    // res.send('POST route on things.');
//  });


app.post('/new/addblog', async(req, res)=>{
    

      const {title,text}=req.body
    console.log(req.body)
    const blog= await Blog.create({
        title,
        text
    })

    console.log(blog)
    console.log('blog')


    res.send({
        message:"blog Added Successfully",
        blog
    })
 });
 

 
app.get('/getblog', async(req, res)=>{
    
const blog=await Blog.find()
  res.send({
      message:"blog fetched Successfully",
      blog
  })
});



app.post('/viewblog:id', async(req, res)=>{
    const id=req.params.id
    
    
    console.log(id)
    
    const blog=await Blog.findById(id)
      res.send({
          message:"blog viewed Successfully",
          blog
      })
    });
    

 