import {DataTypes, Op} from 'sequelize'
import db from '../../db/db.js'

const prodPlaces = db.define('prod_places',{
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
    recipe_in_progress : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    // recipes : {
    //     type : DataTypes.VIRTUAL,
    // },
},{
    freezeTableName: true,
    timestamps: false,
})

export default prodPlaces