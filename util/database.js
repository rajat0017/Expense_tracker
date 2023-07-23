const Sequelize= require('sequelize');

const sequelize = new Sequelize('expenses','root','Rajat@7208',{
    dialect:'mysql',
    host:'localhost'
});

module.exports= sequelize;