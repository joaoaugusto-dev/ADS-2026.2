//Requerer a model do User
const User = require('../models/Users');
const bcrypt = require('bcrypt')

module.exports = class UserController {
    static async register(req, res) {
        const { name, email, password, image, phone } = req.body

        //Criptografar a senha
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //Criar o novo usuario
        try {
            await User.create({
                name: name,
                email: email,
                password: passwordHash,
                phone: phone
            })
            res.status(200).json({ message: 'Usuario cadastrado com sucesso!' })
        } catch {
            res.status(500).json({ message: error })
        }
    };
    //Método para listar todos os usuarios
    static async listall(req, res) {
        try {
            const users = await User.findAll()
            res.status(200).json({ users: users })
        } catch {
            res.status(500).json({ error })
        }

    }
};