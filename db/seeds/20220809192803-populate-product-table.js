module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = [{
      uuid: '590dd246-675a-4fe7-9cc4-d737fcd7e752',
      name: 'Vestido M\/M Full Camuflado',
      omieCode: 'PC00001C5A',
      price: 120,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: '5a782e23-4410-4643-b00d-dea115da176d',
      name: 'Polo Plus Slim',
      omieCode: 'PC0000258C',
      price: 330,
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('products', users, {})
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('products', null, {})
  }
};
