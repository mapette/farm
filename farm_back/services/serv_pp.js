import {
    itemsList, itemsById,
    saveItem,
    sumOfItemsByStorPl,
} from '../data/DAO/DAO_items.js'
import {
    ppList,
} from '../data/DAO/DAO_prod_places.js'
import {
    recipesById,
} from '../data/DAO/DAO_recipes.js'

const getAllPp = (request, response) => {
    ppList()
        .then(listPp => {
            // listPp.forEach(l => {
            //     l.recipes = []
            //     recipesById(l.id)
            //         .then(rec => {
            //             console.log(l.name, rec.name)
            //             l.recipes.push(rec)
            //             console.log('**************',l)
            //             //  response.send('listPp')
            //         })
            // })
            response.send(listPp)
        })
    // .then( (listPp)=> console.log('**************',listPp))
    // .then(listPp => response.send(listPp))


}

/*
 itemsList()
                .then(items => items.filter(item => item.id_stock === parseInt(request.params.id)))
                .then(items => {
                    stock.stock_items = []
                    items.forEach(item => {
                        stock.stock_items.push(item)
                    })
                    response.send(stock)
                })
                */




export {
    getAllPp,


}