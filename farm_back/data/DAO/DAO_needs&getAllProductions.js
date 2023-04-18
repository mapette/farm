import Needs from '../models/model_Needs.js'
import Productions from '../models/model_productions.js'
import db from '../../db/db.js'
import { Sequelize, } from 'sequelize'

const NeedsList = () => {
    return Needs.findAll()
}

const ProductionsList = () => {
    return Productions.findAll()
}

export  {
    NeedsList, 
    ProductionsList,
}