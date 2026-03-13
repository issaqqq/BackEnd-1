const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');
const userModel = require('./usermodel');

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
 
app.get('/', function(req, res) {
    fs.readdir(`./files`, function(err, files){
        console.log(files);
        res.render("index", {files: files});
    })
})

app.get('/file/:filename', function(req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render('show', {filename: req.params.filename, filedata:  filedata});
    })
});

app.get('/edit/:filename', function(req, res) {
   res.render('edit', {filename: req.params.filename})
});

app.post('/edit', function(req, res) {
   fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
    res.redirect("/")
   })
});

app.post('/create', function(req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/');
    });
});

app.get('/adduser', async (req,res) => {
    let createuser = await userModel.create({
        name: "harsh",
        email: "harshita@gmail.com",
        username: "harshhh" 
    })
    res.send(createuser);
    console.log("Hey")
})

app.get('/update', async (req,res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "harshhh"}, {name: "Harsh vandana"}, {new:true})

    res.send(updateduser);
})

app.get("/read", async (req, res)=> {
    let users = await userModel.find({username: "harshhh"});
    res.send(users);
})

app.listen(3000, function() {
    console.log("server is running on port 3000");
})
