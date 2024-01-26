const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: false,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.books = require("./book.model.js")(sequelize, Sequelize, DataTypes);
db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.role = require("./role.model.js")(sequelize, Sequelize, DataTypes);
db.customer= require("./customer.model.js")(sequelize,Sequelize,DataTypes);
db.supplier= require("./supplier.model.js")(sequelize,Sequelize,DataTypes);
db.logistic= require("./logistic.model.js")(sequelize,Sequelize,DataTypes);
db.rfqcustomer= require("./rfqcustomer.model.js")(sequelize,Sequelize,DataTypes);
db.pricelist= require("./pricelist.model.js")(sequelize,Sequelize,DataTypes);
db.po= require("./po.model.js")(sequelize,Sequelize,DataTypes);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id"
});

db.customer.belongsToMany(db.rfqcustomer, {
  through: "rfqcustomer_id",
  foreignKey: "customer_id",
  otherKey: "customer_id"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
