const { sequelize } = require('../teste2/models')
sequelize.sync().then(() => {
    console.log('Conectado ao banco de dados!')
})