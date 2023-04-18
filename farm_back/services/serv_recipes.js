import {
    itemsList, itemsById,
    saveItem,
    sumOfItemsByStorPl,
} from '../data/DAO/DAO_items.js'
import {
    recipesList, recipesById, recipesByPp,
} from '../data/DAO/DAO_recipes.js'
import {
    stockById,
} from '../data/DAO/DAO_stocks.js'

const getAllRecipes = (request, response) => {
   return returnAllRecipes()
    .then(list => response.send(list))
}

const returnAllRecipes = () => {
    return recipesList()
}

const getOneRecipe = (request, response) => {
    const { params } = request
    let rec = []
    recipesById(params.id)
    .then(rec => response.send(rec))
}

export {
    getAllRecipes,
    getOneRecipe,

}