const express = require("express");
const port = 3000;
const app = express();

//ustawienie, ze moja aplikacja musi korzystac z silnika hbs

app.set("view engine", 'hbs')

// Podpięcie css

var path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));

//gdy uzytkownik wchodzi na stronę

const fromAnotherFile = require("./assets/functions/functions")
app.get('/', function (req, res) {

    const sample = () => {
        return 'proba'
    }

    res.render('index', {
    pageTitle: "Lekcja01",
        subTitle: fromAnotherFile.someTitle,
        anotherTitle: sample()
    })
})

app.get('/about', function (req, res){
    res.send("My site")
})

app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...:", err)
    }
    console.log("serwer działa na porcie", port)
})
