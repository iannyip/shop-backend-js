// 1. Import NPM libraries
import sequelizePackage from "sequelize";

// 2. Import config for database. We use this to initialize a Sequelize object
import allConfig from "../config/config.js";

// 3. Import models for each table
import initorderProductModel from "./orderProduct.mjs";
import initProductModel from "./product.mjs";
import initCustomerModel from "./customer.mjs";
import initOrderModel from "./order.mjs";

// 4. Initialize a Sequelize object
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

// 5. Initialize an object for each Model. Store as attributes of the db object
db.Product = initProductModel(sequelize, Sequelize.DataTypes);
db.Order = initOrderModel(sequelize, Sequelize.DataTypes);
db.Customer = initCustomerModel(sequelize, Sequelize.DataTypes);
db.orderProduct = initorderProductModel(sequelize, Sequelize.DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 6. Handle Associations between db.objects.
db.Order.belongsToMany(db.Product, { through: db.orderProduct });
db.Product.belongsToMany(db.Order, { through: db.orderProduct });
db.Order.hasMany(db.orderProduct);
db.orderProduct.belongsTo(db.Order);
db.Product.hasMany(db.orderProduct);
db.orderProduct.belongsTo(db.Product);

// 7. export db as an OBJECT
export default db;
