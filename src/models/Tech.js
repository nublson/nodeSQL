const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING
            },
            { sequelize }
        );
    }

    static associate(models) {
        // Uma tech pertence à muitos users
        this.belongsToMany(models.User, {
            foreignKey: "tech_id",
            through: "user_techs",
            as: "users"
        });
    }
}

module.exports = Tech;
