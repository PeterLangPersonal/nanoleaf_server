'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Not entirely sure what this value is referring to, it's the key value of the salesOrder data
      orderId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateCreated: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      salesChannel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isoCurrency: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      subtotal: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      discountAmt: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      shipping: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      taxes: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      taxType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      lineItems: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      fulfillments: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      payments: {
        allowNull: false,
        type: Sequelize.JSON,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_orders');
  }
};