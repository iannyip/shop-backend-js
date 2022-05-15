"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const customerList = [];
    const productList = [];
    const orderList = [];
    const orderProductList = [];

    // insert into tables
    let customers = await queryInterface.bulkInsert("customers", customerList, {
      returning: true,
    });
    let products = await queryInterface.bulkInsert("products", productList, {
      returning: true,
    });
    let orders = await queryInterface.bulkInsert("orders", orderList, {
      returning: true,
    });
    let orderProducts = await queryInterface.bulkInsert(
      "order_products",
      orderProductList,
      {
        returning: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("order_products", null);
    await queryInterface.bulkDelete("orders", null);
    await queryInterface.bulkDelete("products", null);
    await queryInterface.bulkDelete("customers", null);
  },
};
