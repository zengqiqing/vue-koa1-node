const db = require('../config/db.js')
const userModel = '../schema/user.js';
const TodolistDb = db.Todolist;
const User = TodolistDb.import(userModel)

const getUserById = async function(id){
    const userInfo = await User.findOne({
      where:{
          id:id
      }
  })
    return userInfo
}

  
  module.exports = {
    getUserById
  }
