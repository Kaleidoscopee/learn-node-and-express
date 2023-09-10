const express = require('express')
const app = express()

app.get("/home", (req, res)=>{
    let user = {
        name: "Geek",
        roll: 1
    }
    res.send(user);
});

app.listen(3000, ()=>{
    console.log("server started at 3000...");
})