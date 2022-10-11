const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) =>{
    const Posts = Sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        PostText:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });
    return Posts;
}