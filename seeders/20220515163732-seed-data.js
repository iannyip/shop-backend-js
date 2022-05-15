"use strict";

import { faker } from "@faker-js/faker";

module.exports = {
  async up(queryInterface, Sequelize) {
    const customerList = [];
    const productList = [];
    const orderList = [];
    const orderProductList = [];

    // CUSTOMERS
    const numberOfCustomers = 10;
    for (let i = 0; i < numberOfCustomers; i++) {
      customerList.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        created_at: new Date(),
        created_at: new Date(),
      });
    }

    // PRODUCTS
    const numberOfProducts = 20;
    const sizes = ["S", "M", "L"];
    const quantityMax = 50;
    for (let i = 0; i < numberOfProducts; i++) {
      productList.push({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        size: sizes[Math.floor(Math.random() * sizes.length)],
        colour: faker.commerce.color(),
        quantity: Math.floor(Math.random() * quantityMax),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    // ORDERS
    const numberOfOrders = 100;
    for (let i = 0; i < numberOfOrders; i++) {
      orderList.push({
        customer_id: Math.floor(Math.random() * numberOfCustomers),
        total_price: Math.random() * 100,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    // ORDERPRODUCTS
    const maxItems = 5;
    for (let i = 0; i < numberOfOrders; i++) {
      // for each order, create a couple of items
      let itemCount = Math.floor(Math.random() * maxItems);
      for (let j = 0; j < itemCount; j++) {
        orderProductList.push({
          order_id: numberOfOrders,
          product_id: Math.floor(Math.random() * numberOfProducts),
          quantity: Math.floor(Math.random() * maxItems) + 1,
          total_price: Math.floor(Math.random() * 20000) / 100,
          created_at: new Date(),
          updated_at: new Date(),
        });
      }
    }

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
