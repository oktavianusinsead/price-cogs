const db = require("../models");
const Supplier = db.customer;
const Op = db.Op;

// Create and Save a new Book
exports.create = (req, res) => {
  // Validate request
  if (!req.body.supplier_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Customer
  const supplier = {
    supplier_id: req.body.supplier_id,
    supplier_name: req.body.supplier_name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    
  };

  // Save Book in database
  Supplier.create(supplier)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Supplier."
      });
    });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
  const supplier_name = req.query.supplier_name;
  var condition = supplier_name ? { supplier_name: { [Op.like]: `%${supplier_name}%` } } : null;

  Supplier.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving Suppliers."
      });
    });
};

// Find a single Book with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Supplier.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Supplier with id = ${id}`
      });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Supplier.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Supplier was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Supplier with id=${id}. Maybe Supplier was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Supplier with id=" + id
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Supplier.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Supplier was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Supplier with id=${id}. Maybe Supplier was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Supplier with id=" + id
      });
    });
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
  Supplier.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Supplier were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Supplier."
      });
    });
};


