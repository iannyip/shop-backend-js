'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        size: {
          type: Sequelize.STRING,
        },
        colour: {
          type: Sequelize.STRING,
        },
        quantity: {
          defaultValue: 0,
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );

    await queryInterface.createTable('customers',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );

    await queryInterface.createTable('orders', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
         customer_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'customers',
            key: 'id',
          }
        },
        total_price: {
          type: Sequelize.FLOAT,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );

    await queryInterface.createTable('order_products',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        order_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'orders',
            key: 'id',
          }
        },
        product_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'products',
            key: 'id',
          }
        },
        quantity: {
          type: Sequelize.INTEGER,
        },
        total_price: {
          type: Sequelize.FLOAT,
        }, 
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
    await queryInterface.dropTable('customers');
    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('order_products');
  }
};
