import {DataTypes, Op} from 'sequelize'
import db from '../../db/db.js'

const stock = db.define('stocks',{
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
    capacity : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    // stock_items : {
    //     type : DataTypes.VIRTUAL,
    // },
},{
    freezeTableName: true,
    timestamps: false,
})

export default stock