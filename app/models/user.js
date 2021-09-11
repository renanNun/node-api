const crypto = require('crypto-js')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name:{ 
        type: DataTypes.STRING,
        get() {
          let data = this.getDataValue('name');
          return data.toString(CryptoJS.enc.Utf8);
        },
        set(value) {
          let encryptedValue = crypto.AES.encrypt(value, 'cavalodeteta').toString();
          this.setDataValue('name', encryptedValue);
        }
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
  
    return User;
  }