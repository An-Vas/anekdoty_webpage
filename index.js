const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const connectDB = require("./backend/db/db-users");

app.set('view engine', 'hbs');
app.set("views", __dirname +  '/frontend/views');
hbs.registerPartials(__dirname +  '/frontend/views/partials')
app.use(express.static(__dirname +  '/frontend/static'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/home", function(_, response){
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /home`);
    response.render("home.hbs");
});


app.use("/jokes/:category", async (req, res) => {
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /jokes/:category`);
    res.render("jokes.hbs", { info: "info5"});
});

app.use("/signup", function(req, res){
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /signup`);
    res.render("signup.hbs");

});

app.use("/signin", function(req, res){
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /signin`);
    res.render("signin.hbs");
});

app.get("/signout", (req, res) => {
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /signout`);
    res.cookie("jwt", "", { maxAge: "1" })
    res.redirect("/home")
})


app.use("/api/auth", require("./backend/auth/scripts/route"))
app.use("/api/jokes", require("./backend/jokes/route"))

connectDB();

app.listen(3000)
console.log("[" +  new Date().toLocaleString() + `] Server: started on the port 3000`);
