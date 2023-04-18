import prodPlaces from '../models/model_prod_places.js'
import db from '../../db/db.js'
import {Sequelize, } from 'sequelize'


const ppList = () => {
    return prodPlaces.findAll()
}


export  {
    ppList, 
}