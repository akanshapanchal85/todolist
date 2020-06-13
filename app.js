//jshint eversion:6

const express = require("express")
const bodyParser = require("body-parser")


const app = express();

let items=["Buy food" , "Eat food" , "Cook food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/", function(req, res) {
  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday :"long",
    month : "long",
    day : "numeric"
  }
  let day = today.toLocaleDateString("en-US",options);



res.render ("list" ,{kindaday :day , newListItems :items})


})

app.post("/",function(req , res){
    item = req.body.newItem;
    items.push(item);
    res.redirect ("/");
})


app.listen(3000, function() {
  console.log("server started at 3000");
})
