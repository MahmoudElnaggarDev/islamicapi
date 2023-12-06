const app = require("express")();
const port = 8080;
app.listen(port);
app.get("/messages", (req, res) => {
    const messages = [""];
    const random = Math.floor(Math.random() * messages.length);
    res.status(200).send({
        text: messages[random]
    });
});
