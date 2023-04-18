import {DataTypes, Op} from 'sequelize'
import db from '../../db/db.js'

const needs = db.define('needs',{
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    nb : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    id_recipe : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    id_item : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }, 
    // recipe : {
    //     type : DataTypes.VIRTUAL,
    // },
    // item : {
    //     type : DataTypes.VIRTUAL,
    // },
},{
    freezeTableName: true,
    timestamps: false,
})

export default needs