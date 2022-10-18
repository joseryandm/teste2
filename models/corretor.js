const corretor = (sequelize, DataTypes) => {
    const Corretor = sequelize.define('Corretor', {
        Textos: {
            type: DataTypes.STRING
        },
        TextoCerto_Ana: {
            type: DataTypes.STRING
        },
        TextoErrado_Ana: {
            type: DataTypes.STRING
        },
        TipoErro_Ana: {
            type: DataTypes.STRING
        },
        Contador_Ana: {
            type: DataTypes.INTEGER
        },
        TextoCerto_Shara: {
            type: DataTypes.STRING
        },
        TextoErrado_Shara: {
            type: DataTypes.STRING
        },
        TipoErro_Shara: {
            type: DataTypes.STRING
        },
        Contador_Shara: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'corretor'
    })

    return Corretor
}

module.exports = corretor