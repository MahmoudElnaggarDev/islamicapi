const app = require("express")();
app.get("/message", (req, res) => {
    const messages = [""];
    const random = Math.floor(Math.random() * messages.length);
    res.status(200).send({
        text: messages[random]
    });
});
