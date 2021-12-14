const express = require("express");
const server = express();
const posts = []
server.post('/home', (req,res)=>
{
    res.json(req.body)  //El body va ser todo los elementos que pasemos con el postman
    posts.push(req.body)

}
)
server.use(bodyParser.json())
server.listen(3000);