const express = require('express');

const app = express();

app.use(express.static('public'))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    res.sendFile(__dirname + "/contact-me.html");

})





app.post("/contact-me.html", function(req,res){
    res.redirect("/");
  })
  






  
app.listen(process.env.port || 3000, function(){
    console.log("server running on port 3000!");
})