const express = require("express")

const router = express.Router()

router.use(express.json());


router.get("/", (req, res) => {
    res.send("Home Page");
});


  
router.post("/login", (req, res) => {
    const { name } = req.body;
    // console.log(name)
    if (name) {
      return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send("Please Provide Credentials");
});
  
  
router.get("/about", (req, res) => {
    res.send("About Page");
});
  

module.exports = router