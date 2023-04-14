import {DataTypes, Op} from 'sequelize'
import db from '../../db/db.js'

const recipes = db.define('recipes',{
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    id_pp : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    prod_place : {
        type : DataTypes.VIRTUAL,
    },
},{
    freezeTableName: true,
    timestamps: false,
})

export default recipes