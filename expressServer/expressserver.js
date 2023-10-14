const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const port = 5001
let data = []
app.use(bodyParser.json());
app.get("/get-route",(req, res)=>{
    // res.status(200).json({ statusvalue : "get"})
    res.status(200).json({data})
})
app.post("/post-route",(req, res)=>{
    // res.status(200).json({ statusvalue : "Post"})
    // res.status(200).json({body:req.body})
    const {input , desc} = req.body;
    data.push({input,desc});
    res.status(200).json({data})
})
app.delete("/delete-route",(req,res)=>{
    const {i} = req.body;
    // console.log("delete")
    // console.log({body:req.body})
    console.log(`delete ${({body:req.body})}`)
    data = data.filter((d,id)=>{
        return id !== i;
    })
    console.log(data)
    res.status(200).json({data})
})
app.put("/edit-route",(req,res)=>{
    const {input,desc,id} = req.body;
    data.forEach(obj=>{
        if(id===obj.id){
            obj.input = input,
            obj.desc = desc
        }
    })
    res.status(200).json({data})
})
app.listen(5001,()=>{console.log(`server is running on port number ${5001}`)})



console.log(app)
// console.log("Express file run hogyi he")