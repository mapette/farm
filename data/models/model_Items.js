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
    id_storage : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    item_storage : {
        type : DataTypes.VIRTUAL,
    },
},{
    freezeTableName: true,
    timestamps: false,
})

export default items