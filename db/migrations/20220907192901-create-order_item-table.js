'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_items', {
      uuid: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      orderId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'orders'
          },
          key: 'uuid'
        }
      },
      productId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'products'
          },
          key: 'uuid'
        }
      },
      productOmieId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.REAL
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.REAL
      },
      total: {
        type: Sequelize.REAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_items');
  }
};