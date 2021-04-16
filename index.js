const express = require('express')
const app = express()

//Use Middlware
app.use(express.json());

app.post('/', function (req, res) {
    console.log();
    let siblingCount = req.body.siblings.length;
    //Array.length
    res.send({
        msg:"Your Sibling count is "+siblingCount
    });
})
let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
})