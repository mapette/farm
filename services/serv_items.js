import {
    itemsList, itemsById,
    saveItem,
    sumOfItemsByStorPl,
} from '../data/DAO/DAO_items.js'
import {
    stockById,
} from '../data/DAO/DAO_stocks.js'

const getAllItems = (request, response) => {
    itemsList()
        .then(list => response.send(list))
}



const getOneItem = (request, response) => {
    const { params } = request
    let item =
        itemsById(params.id)
            .then(it => {
                item = it
                stockById(item.id_storage)
                    .then(sp => {
                        item.item_storage = sp
                        response.send(item)
                    })
            })
}

const increaseOneItem = (request, response) => {
    const { params } = request
    itemsById(params.id)
        .then(item => {
            item.nb = item.nb + parseInt(params.nb)
            return saveItem(item)
        })
        .then(item => 
            response.send({ id: item.id })
        )
}

const decreaseOneItem = (request, response) => {
    const { params } = request
    itemsById(params.id)
        .then(item => {
            item.nb = item.nb - parseInt(params.nb)
            return saveItem(item)
        })
        .then(item => 
            response.send({ id: item.id })
        )
}

const nbOfItems = (request, response) => {
    sumOfItemsByStorPl({id_sp : request.params.id})
    .then(nb => response.send(nb))  
}

export {
    getAllItems,
    getOneItem,
    increaseOneItem, decreaseOneItem,
    nbOfItems,

}