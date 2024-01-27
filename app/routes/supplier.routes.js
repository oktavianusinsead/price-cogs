module.exports = app => {
    const supplierController = require("../controllers/supplier.controller.js");
  
    const router = require("express").Router();
  
    // Create a new Customer
    router.post("/", supplierController.create);
  
    // Retrieve all Customer
    router.get("/", supplierController.findAll);
  
    // // Retrieve all published Books
    // router.get("/published", bookController.findAllPublished);
  
    // Retrieve a single Customer with id
    router.get("/:id", supplierController.findOne);
  
    // Update a Customer with id
    router.put("/:id", supplierController.update);
  
    // Delete a Customer with id
    router.delete("/:id", supplierController.delete);
  
    // // Delete all Books
    // router.delete("/", bookController.deleteAll);
  
    app.use("/api/suppliers", router);
  };
  