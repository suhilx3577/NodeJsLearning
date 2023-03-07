const { people } = require("../data");


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "Please provide Name Vaue" });
    }
    return res.status(200).json({ success: true, person: name });
}

const createPeoplePostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ success: false, msg: "Please Provide a Name" });
    }
  
    return res.status(200).json({ success: true, person: [...people, name] });
}

const updatePeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((person) => person.id === Number(id));
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `There is no person with that id :${id}` });
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
  
    res.status(200).json({ success: true, data: newPeople });
}

const deletePeople = (req, res) => {
    const { id } = req.params;
  
    const person = people.find((person) => person.id === Number(id));
  
    if (!person) {
      return res.status(404).json({
        success: false,
        msg: `there is no such person with id :${id}`,
      });
    }
  
    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
}


module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}