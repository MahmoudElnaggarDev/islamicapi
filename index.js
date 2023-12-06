const app = require("express")();
const port = 8080;

app.listen(port)

app.get("/test", (req, res) => {
    res.status(200).send({
        text: "hello"
    })
})