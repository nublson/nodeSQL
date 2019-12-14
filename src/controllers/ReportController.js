const { Op } = require("sequelize");

const Address = require("../models/Address");
const Tech = require("../models/Tech");
const User = require("../models/User");

module.exports = {
    async show(req, res) {
        // Encontrar todos usuários que tem email que termina com @gmail.com
        // Desses eu quero todos que vivem na rua "Travessa Vila-Verde"
        // Destes, quero as techs que começam com React

        const users = await User.findAll({
            attributes: ["name", "email"],
            where: {
                email: {
                    // O sequelize expõe operadores de símbolos (OP) que podem ser usados para criar comparações mais complexas
                    [Op.iLike]: "%@hotmail.com"
                }
            },
            include: [
                // addresses
                {
                    association: "addresses",
                    where: {
                        street: "Travessa Vila-Verde"
                    }
                },
                // techs
                {
                    association: "techs",
                    where: {
                        name: {
                            [Op.iLike]: "React%"
                        }
                    }
                }
            ]
        });

        return res.json(users);
    }
};
