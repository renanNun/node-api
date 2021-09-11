const crypto = require('crypto-js')

const password = process.env.APP_KEY

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      defaultValue: 'Não informado',
      get () {
        const data = this.getDataValue('name')
        const decrypt = crypto.AES.decrypt(data, password)
        return decrypt.toString(crypto.enc.Utf8)
      },
      set (value) {
        const encryptedValue = crypto.AES.encrypt(value, password)
        this.setDataValue('name', encryptedValue.toString())
      }
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: 'Não informado',
      get () {
        const data = this.getDataValue('email')
        const decrypt = crypto.AES.decrypt(data, password)
        return decrypt.toString(crypto.enc.Utf8)
      },
      set (value) {
        const encryptedValue = crypto.AES.encrypt(value, password)
        this.setDataValue('email', encryptedValue.toString())
      }
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: 'Não informado',
      get () {
        const data = this.getDataValue('password')
        const decrypt = crypto.AES.decrypt(data, password)
        return decrypt.toString(crypto.enc.Utf8)
      },
      set (value) {
        const encryptedValue = crypto.AES.encrypt(value, password)
        this.setDataValue('password', encryptedValue.toString())
      }
    }
  })

  return User
}
