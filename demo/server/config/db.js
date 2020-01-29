const Sequelize = require('sequelize'); 
const Todolist = new Sequelize('mysql://root:qiqing26@localhost/todolist',{
  define: {
    timestamps: false, 
  }
}) 

module.exports = {
  Todolist // 将Todolist暴露出接口方便Model调用
}