import sequelizePackage from "sequelize";
import allConfig from "../config/config.js";

import initorderProductModel from "./orderProduct.mjs";
import initProductModel from "./product.mjs";
import initCustomerModel from "./customer.mjs";
import initOrderModel from "./order.mjs";

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Here we actually define the attributes of the db object
db.Product = initProductModel(sequelize, Sequelize.DataTypes);
db.Order = initOrderModel(sequelize, Sequelize.DataTypes);
db.Customer = initCustomerModel(sequelize, Sequelize.DataTypes);
db.orderProduct = initorderProductModel(sequelize, Sequelize.DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Associations
db.Order.belongsToMany(db.Product, { through: db.orderProduct });
db.Product.belongsToMany(db.Order, { through: db.orderProduct });
db.Order.hasMany(db.orderProduct);
db.orderProduct.belongsTo(db.Order);
db.Product.hasMany(db.orderProduct);
db.orderProduct.belongsTo(db.Product);

// export an OBJECT
export default db;
