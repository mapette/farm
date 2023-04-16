//const express = require('express');
// const app = express();
const port = process.env.PORT || 8000;

import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
export { app, }
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

import { getAllStoragePlaces, getOneStoragePlace } from './services/serv_stocks.js'
import {
    getAllItems, getOneItem,
    increaseOneItem, decreaseOneItem,
    nbOfItems,
} from './services/serv_items.js'

app.get('/stocks', getAllStoragePlaces)
app.get('/stocks/:id', getOneStoragePlace)
app.get('/items', getAllItems)
app.get('/item/:id', getOneItem)
app.get('/increaseItem/:id/:nb', increaseOneItem)
app.get('/decreaseItem/:id/:nb', decreaseOneItem)
app.get('/stockNb/:id', nbOfItems)





