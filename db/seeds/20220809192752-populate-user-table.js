
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = [{
      uuid: '4cdc1f04-ee1a-481c-b32d-256877b40ac3',
      name: 'Eduardo Olimpio',
      email: 'edu@miggos.com',
      omieUser: '1985708177',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: 'a4014662-0a55-41a3-95b5-7457a21d63e6',
      name: 'Rodrigo Santana',
      email: 'rodrigo.santana@miggos.com',
      omieUser: '1985707204',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('users', users, {})
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {})
  }
};
