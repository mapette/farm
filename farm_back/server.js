const port = process.env.PORT || 8000;

import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
export { app, }
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

// évite les pbmes de sécurité pour les envois front->back
import cors from 'cors'
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

import { getAllStoragePlaces, getOneStoragePlace } from './services/serv_stocks.js'
import {
    getAllItems, getOneItem,
    increaseOneItem, decreaseOneItem,
    nbOfItems,
} from './services/serv_items.js'
import { getAllPp } from './services/serv_pp.js'
import { getAllRecipes, getOneRecipe } from './services/serv_recipes.js'
import { getAllneeds, getAllProductions } from './services/serv_needs&productions.js'

app.get('/items', getAllItems)
app.get('/items/:id', getOneItem)
app.get('/increaseItems/:id/:nb', increaseOneItem)
app.get('/decreaseItems/:id/:nb', decreaseOneItem)
app.get('/stocksNb/:id', nbOfItems)

app.get('/stocks', getAllStoragePlaces)
app.get('/stocks/:id', getOneStoragePlace)

app.get('/pp', getAllPp)
app.get('/recipes', getAllRecipes)
app.get('/recipes/:id', getOneRecipe)

app.get('/needs',getAllneeds)
app.get('/productions',getAllProductions)




