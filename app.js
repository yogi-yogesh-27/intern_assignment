var express = require("express");
var app=express();
app.set("view engine","ejs")

app.get("/",function(req,res){
    var images=[
        {name:"img1",author:"Alejandro Escamilla",link:"https://unsplash.com/photos/yC-Yzbqy7PY/download?force=true"},
        {name:"img2",author:"Radek Grzybowski",link:"https://unsplash.com/photos/eBRTYyjwpRY/download?force=true"},
        {name:"img3",author:"Craig Garner",link:"https://unsplash.com/photos/YoadQb46v6k/download?force=true"},
        {name:"img4",author:"Nick Morrison",link:"https://unsplash.com/photos/FHnnjk1Yj7Y/download?force=true"}
    ]
    res.render("home",{images:images});
}); 


app.listen(3000,function(){
	console.log("server started");
});
