module.exports = app => {
  const customerController = require("../controllers/customer.controller.js");

  const router = require("express").Router();

  // Create a new Customer
  router.post("/", customerController.create);

  // Retrieve all Customer
  router.get("/", customerController.findAll);

  // // Retrieve all published Books
  // router.get("/published", bookController.findAllPublished);

  // Retrieve a single Customer with id
  router.get("/:id", customerController.findOne);

  // Update a Customer with id
  router.put("/:id", customerController.update);

  // Delete a Customer with id
  router.delete("/:id", customerController.delete);

  // // Delete all Books
  // router.delete("/", bookController.deleteAll);

  app.use("/api/customers", router);
};
