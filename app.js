const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
var newListItems=["Buy Food","Cook Food","Eat Food"];
app.get("/",function(req,res){
    var today=new Date();
    var options={
        weekday: "long",
        day:"numeric",
        month: "long",
    };
    var day=today.toLocaleDateString("en-US",options);
    res.render("list",{kindOfDay:day,newListItem:newListItems});

});
app.post("/",function(req,res){
    var add=req.body.newItem;
    newListItems.push(add);
    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("listening on port no. 3000")
}); 
