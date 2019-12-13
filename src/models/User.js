const { Model, DataTypes } = require("sequelize");

class User extends Model {
    // Criamos o método init que recebe a conexão com a DB
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING
            },
            // Passamos também o objeto de configuração que é a conexão com o banco de dados
            { sequelize }
        );
    }

    static associate(models) {
        this.hasMany(models.Address, {
            // No caso do hasMany, o foreignKey faz referência à coluna armazenada dentro do Address
            foreignKey: "user_id",
            as: "addresses"
        });
    }
}

module.exports = User;
