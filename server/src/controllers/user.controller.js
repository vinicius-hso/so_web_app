const db = require("../models");
const User = db.users;
// const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const user = {
    name: req.body.name,
    email: req.body.email,
    // active: req.body.active ? req.body.active : false,
  };
  // Save Tutorial in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  //   const name = req.query.name;
  //   var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
        error: err,
      });
    });
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
// exports.update = (req, res) => {};

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {};
