import {DataTypes, Op} from 'sequelize'
import db from '../../db/db.js'

const items = db.define('items',{
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
    nb : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    id_stock : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    // name_stock : {
    //     type : DataTypes.VIRTUAL,
    // },
},{
    freezeTableName: true,
    timestamps: false,
})

export default items