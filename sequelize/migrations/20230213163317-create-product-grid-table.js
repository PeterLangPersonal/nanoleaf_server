'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
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
      sku: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      barcode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      parentSku: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      regionCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      itemType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      supplier: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      packData: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      priceData: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      variantName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      shortDesc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      stocklink: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastUpdated: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
