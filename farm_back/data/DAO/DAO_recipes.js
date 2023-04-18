import Recipes from '../models/model_recipes.js'
import db from '../../db/db.js'
import {Sequelize, } from 'sequelize'


const recipesList = () => {
    return Recipes.findAll()
}

const recipesById = (id) => {
    return Recipes.findByPk(id)
}

const recipesByPp = (id_pp) => {
    // return Recipes.sync({ alter: false }).then(() => {
    //     return db.query(`
    //     SELECT *, pp.name, r.name FROM prod_places pp, recipes r
    //     where pp.id = r.id_pp
    //     and pp.id = :id`,
    //         {
    //             type: Sequelize.QueryTypes.SELECT,
    //             model: Recipes,
    //             replacements: { id: id_pp },
    //         })
    // })
}

export  {
    recipesList, 
    recipesById,
    recipesByPp,
}