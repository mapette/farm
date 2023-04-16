import Stocks from '../models/model_stocks.js'


const stockList = () => {
    return Stocks.findAll()
}

const stockById = (id) => {
    return Stocks.findByPk(id)
}

export  {
    stockList, 
    stockById,
 }