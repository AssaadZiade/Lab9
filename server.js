let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let fs = require("fs");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.post("/", function (req, res) {
    let name = req.body.name;
    let img_url = req.body.img_url;
    let description = req.body.description;
    let color = req.body.color;
    let gender = req.body.gender;
    let birthday = req.body.birthday;
    let string = `<html><body><h1>${name}</h1><br><p>${description}</p><br><p>${gender}</p><br><img scr = "${img_url}"><br><p>${birthday}</p><br><p>${color}</p></body></html>`;
    fs.appendFile("./public/lab9.txt", `${name}, ${description}, ${gender}, ${color}, ${birthday}, ${img_url}\n`, function () {});
    res.write(string);
    res.end("OK!");

})
