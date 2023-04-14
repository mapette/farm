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
    const { params } = request
    let storPl =
        stockById(params.id)
            .then(sp => {
                storPl = sp
                itemsList()
                    .then(items => items.filter(item => item.id_storage === parseInt(request.params.id)))
                    .then(items => {
                        storPl.sp_items = []
                        items.forEach(item => {
                            storPl.sp_items.push(item)
                        })
                        response.send(storPl)
                    })
            })
}



export {
    getAllStoragePlaces,
    getOneStoragePlace,
}