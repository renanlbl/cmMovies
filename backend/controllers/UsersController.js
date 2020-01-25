const User = require('../models/Users');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
process.env.SECRET_KET = 'secret'

const register = async (req, res) => {
    let { name, email, password } = req.body

    const emailExists = await User.findOne({
        email
    })

    if (!emailExists) {
        bcrypt.hash(password, 10, async (err, hash) => {
            password = hash
            await User.create({name, email, password})
        })
    } else {
        return res.json({error: 'Users already exists'})
    }

    return res.json({name, email})
}

const login = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email        
    })

    if (!user) {
        return res.status(401).json({error: 'User not found'})
    }

    const { password } = req.body

    if (bcrypt.compareSync(password, user.password)) {
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
        let token = jwt.sign(payload, process.env.SECRET_KET, {
            expiresIn: "7d"
        })
        return res.json({token})
    } else {
        return res.status(401).json({error: 'Password dont match'})
    }
}

const entry = async (req, res) => {     
    let decoded = await jwt.verify(req.headers['authorization'], process.env.SECRET_KET)

    const user = await User.findOne({
        _id: decoded._id
    })

    if (user) {
        return res.json(user)
    } else {
        console.log('usuário não permitido')
        return res.json({error: 'User dont exists'})
    }
}

module.exports = {
    register,
    login,
    entry,
}