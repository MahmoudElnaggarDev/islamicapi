const app = require("express")();
app.listen(8080);
app.get("/message", (req, res) => {
    const messages = [
      "إن من ورائكم زمان صبر للمتمسك فيه أجر خمسين شهيدًا منكم",
      "لا تزال طائفة من أمتي قائمة بأمر الله لا يضرهم من خذلهم أو خالفهم حتى يأتي أمر الله وهم ظاهرون على الناس",
      "اعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك",
      ""
    ];
    const random = Math.floor(Math.random() * messages.length);
    res.status(200).send({
        text: messages[random]
    });
});
