const app = require("express")();
app.listen(8080);
app.get("/message", (req, res) => {
    const messages = ["﴿ مَنْ كَانَ يُرِيدُ ثَوَابَ الدُّنْيَا فَعِنْدَ اللَّهِ ثَوَابُ الدُّنْيَا وَالْآخِرَةِ وَكَانَ اللَّهُ سَمِيعًا بَصِيرًا ﴾ [النساء: ١٣٤] "];
    const random = Math.floor(Math.random() * messages.length);
    res.status(200).send({
        text: messages[random]
    });
});
