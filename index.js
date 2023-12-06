const app = require("express")();
app.listen(8080);
app.get("/message", (req, res) => {
    const messages = ["1", "2", "3", "4", "5"];
    const random = Math.floor(Math.random() * messages.length);
    res.status(200).send({
        text: messages[random]
    });
});
