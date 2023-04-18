import {
    stockById,
    stockList,
} from '../data/DAO/DAO_stocks.js'
import {
    itemsList,
} from '../data/DAO/DAO_items.js'
import {
    nbOfItems,
} from './serv_items.js'


const getAllStoragePlaces = (request, response) => {
    stockList() 
        .then(list => response.send(list))
}

const getOneStoragePlace = (request, response) => {
    // const { params } = request
    // let stock 
    //     stockById(params.id)
    //         .then(st => {
    //             stock = st
    //             itemsList()
    //                 .then(items => items.filter(item => item.id_stock === parseInt(request.params.id)))
    //                 .then(items => {
    //                     stock.stock_items = []
    //                     items.forEach(item => {
    //                         stock.stock_items.push(item)
    //                     })
    //                     response.send(stock)
    //                 })
    //         })
}



export {
    getAllStoragePlaces,
    getOneStoragePlace,
}