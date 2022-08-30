const dbConnection = require('../infra/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserModel {
    
    async login(user, res) {
        if(!user.userName) {
            return res.status(422).json({ message: 'User name required' })
        }
      
        if(!user.password) {
        return res.status(422).json({ message: 'Password required' })
        }

        const checkUser = await this.findOne(user.userName)
       
        if(!checkUser) {
            return res.status(404).json({ message: 'User not found' })
        }

        const checkPassword = await bcrypt.compare((user.password).toString(), checkUser.password) //Tá parando aqui (Error: data and hash must be strings)
        console.log(typeof user.password, typeof checkUser.password)

        if(!checkPassword) {
            return res.status(422).json({ message: 'Invalid password'})
        }

        try {
            const secret = process.env.SECRET
            const token = jwt.sign({
                id: user.id, 
                name: user.userName, 
                email: user.email, 
                expiresIn: 86400
            }, secret)

            res.set('x-access-token', token);
            res.status(200).json({ 
                message: 'User authenticated successfully', 
                auth: true, 
                token: token
            })
            
        } catch(error) {
            console.log(error)

            res.status(500).json({
                message: 'Server error. Try again later!'
            })
        }
    }

    async registerUser(user, res) {
        if(!user.userName) {
            return res.status(422).json({ message: 'User name required' })
        }
      
        if(!user.email) {
        return res.status(422).json({ message: 'E-mail required' })
        }
    
        if(!user.fullName) {
        return res.status(422).json({ message: 'Full name required' })
        }
    
        if(!user.password) {
        return res.status(422).json({ message: 'Password required' })
        }

        const userExists = await this.findOne(user.userName)
    
        if(userExists) {
        return res.status(422).json({ message: 'User already exists'})
        } 
    
        //Generate encrypt password 
        const salt = 12
        const passwordHash = await bcrypt.hash((user.password).toString(), salt)
        user.password = passwordHash

        const insert = 'INSERT INTO USER SET ?'

        dbConnection.query(insert, user, (error) => {
            error ? res.status(500).json({ message: 'Server error. Try again later!' }) 
                : res.status(201).json({
                    message: 'User succesfully registered'
                })
        })
    }

    getUserById(id, res) { 
        const select = `SELECT userName, email, fullName FROM USER WHERE id=${id}`

        dbConnection.query(select, (error, results) => {
            error ? res.status(404).json({ message: 'User not found'}) 
                : res.status(200).json(results)
        })
    }

    updateUser(id, values, res) {
        const update = `UPDATE USER SET ? WHERE id=?`

        dbConnection.query(update, [values, id], (error) => {
            error ? res.status(400).json(error) 
                : res.status(200).json(`User id ${id} succesfully updated`)
        })
    }

    deleteUser(id, res) {
        const del = `DELETE FROM USER WHERE id=${id}`

        dbConnection.query(del, (error) => {
            error ? res.status(400).json(error) 
                : res.status(200).json(`User id ${id} succesfully delected`)
        })
    }

    //check if user exists
    async findOne(userName) {
        console.log(userName)
        return new Promise((resolve, reject) => {
            const findOne = `SELECT userName, password FROM USER WHERE userName='${userName}'`
            console.log(findOne)

            dbConnection.query(findOne, (error, row) => {
              
                if(error) {
                    console.log(error)
                    return reject('User not found')

                } else if(row) {
                    resolve(row[0])
                    resolve(null)
                }
            }) 
        })
    }
}

module.exports = new UserModel;