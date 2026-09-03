//Requerer a model do User
const { where } = require('sequelize');
const User = require('../models/Users');
const bcrypt = require('bcrypt')
//requer o servico para gerar o token
const createUserToken = require("../helpers/create-user-token")

module.exports = class UserController {
    static async register(req, res) {
        const { name, email, password, image, phone } = req.body

        //Verificar se o usuario ja existe
        const userExists = await User.findOne({ where: { email: email } })
        if (userExists) {
            res.status(422).json({
                message: "Usuario ja cadastrado, utilize outro e-mail"
            })
            return
        }

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
        } catch (error) {
            res.status(500).json({ message: error })
        }
    };
    //Método para listar todos os usuarios
    static async listall(req, res) {
        try {
            const users = await User.findAll()
            res.status(200).json({ users: users })
        } catch (error) {
            res.status(500).json({ error })
        }

    }

    //Criar o método de login
    static async login(req, res) {
        //requerer pelo body os parametros do login
        const { email, password } = req.body

        //verificar se o usuario existe
        const user = await User.findOne({ where: { email: email } })

        if (!user) {
            res.status(422).json({
                message: "Não há usuário cadastrado com esse e-mail"
            })
            return
        }

        //verificar o password 
        const checkPassword = await bcrypt.compare(password, user.password)

        //retornar a mensagem para senha incorreta
        if (!checkPassword) {
            res.status(422).json({
                message: "Senah Inválida"
            })
            return
        }
        //Geramos o token para o user
        await createUserToken(user, req, res)
    }
};