const { User } = require('../models')
const jwt = require('jsonwebtoken')


const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { name } = req.params
        let { userName } = req.query
        const user = await User.find( {userName: name} )
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with the specified username does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("user deleted")
        }
        throw new Error("user item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const SigninUser = async (req, res) => {
    try {
        let { userName, password } = req.body
        await User.findOne( { userName } )
        .then(user => {
            if(user) {
                if(user.password === password) {
                    const accessToken = jwt.sign({username: userName}, "jwt-access-token-secret-key", {expiresIn: '1m'})
                    const refreshToken = jwt.sign({username: userName}, "jwt-refresh-token-secret-key", {expiresIn: '12hr'})

                    res.cookie('accessToken', accessToken, {maxAge: 60000})

                    res.cookie('refreshToken', refreshToken, {maxAge: 120000, httpOnly: true, secure: true, sameSite: 'strict'})
                    return res.json({Signin: true})
                }
            } else {
                res.json({Signin: false, Message: "username doesn't exist. Please register."})
            }
        })
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


const verifyUser = (req, res, next) => {
    const accesstoken = req.cookies.accessToken
    if(!accesstoken) {
        if(renewToken(req, res)) {
            next()
        }
    } else {
        jwt.verify(accesstoken, 'jwt-access-token-secret-key', (err, decoded) => {
            if(err) {
                return res.json({valid: false, message: "Invalid Token"})
            } else {
                req.userName = decoded.userName
                next()
            }
        })
    }
}

const renewToken = (req, res) => {
    const refreshtoken = req.cookies.refreshToken
    let exist = false
    if(!refreshtoken) {
        return res.json({valid: false, message: "No Refresh token"})
    } else {
        jwt.verify(refreshtoken, 'jwt-refresh-token-secret-key', (err, decoded) => {
            if(err) {
                return res.json({valid: false, message: "Invalid Refresh Token"})
            } else {
                const accessToken = jwt.sign({username: decoded.userName}, "jwt-access-token-secret-key", {expiresIn: '1m'})
                res.cookie('accessToken', accessToken, {maxAge: 60000})
                exist = true
            }
        })
    }
    return exist
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByUsername,
    SigninUser,
    verifyUser
}