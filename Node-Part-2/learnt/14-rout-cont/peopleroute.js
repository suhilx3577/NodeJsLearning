const express = require("express");

const { 
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
 } =require('../controllers/people')

const router = express.Router();

// router.get("/", getPeople);
// router.post("/", createPeople);
router.route("/").get(getPeople).post(createPeople)



router.post("/postman", createPeoplePostman);

// router.put("/:id", updatePeople);
// router.delete("/:id", deletePeople);
router.route("/:id").put(updatePeople).delete(deletePeople)


module.exports = router;
