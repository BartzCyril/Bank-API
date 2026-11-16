const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.createUser = async serviceData => {
  try {
    const user = await User.findByEmail(serviceData.email)
    if (user) {
      throw new Error('Email already exists')
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12)

    const result = await User.create({
      email: serviceData.email,
      password: hashPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName
    })

    return User.toPublic(result)
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.getUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.verify(jwtToken, process.env.SECRET_KEY)
    const user = await User.findById(decodedJwtToken.id)

    if (!user) {
      throw new Error('Profile not found!')
    }

    return User.toPublic(user)
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.loginUser = async serviceData => {
  try {
    const user = await User.findByEmail(serviceData.email)

    if (!user) {
      throw new Error('Profile not found!')
    }

    const isValid = await bcrypt.compare(serviceData.password, user.password)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.SECRET_KEY,
      { expiresIn: '1d' }
    )

    return { token }
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.updateUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.verify(jwtToken, process.env.SECRET_KEY)
    const user = await User.updateNames(
      decodedJwtToken.id,
      serviceData.body.firstName,
      serviceData.body.lastName
    )

    if (!user) {
      throw new Error('Profile not found!')
    }

    return User.toPublic(user)
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
