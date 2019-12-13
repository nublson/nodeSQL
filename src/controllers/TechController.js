const User = require("../models/User");
const Tech = require("../models/Tech");

module.exports = {
    async index(req, res) {},

    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        !user && res.status(400).json({ error: "User not found!" });

        /* O método firdOrCreate verifica se a tech já existe, caso não exista, ela 
        faz o registro da tech na tabela, porém este método retorna também um boolean, 
        como nao vamos usar, desestruturamos o seu retorno para receber apenas a tech */
        const [tech] = await Tech.findOrCreate({
            where: { name }
        });

        /* Quando usamos um relacionamento N-N, o sequelize cria vários métodos que 
        envolvem as tabelas relacionadas */
        await user.addTech(tech);

        return res.json(tech);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        !user && res.status(400).json({ error: "User not found!" });

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return res.json();
    }
};
