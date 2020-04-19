const app = require("express")();

app.get("/:id" , (req , res) => {
     let id = req.params.id;
     res.send(id);
})

app.listen(process.env.PORT)
