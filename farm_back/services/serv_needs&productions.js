import {
    ProductionsList,
} from '../data/DAO/DAO_needs&getAllProductions.js'
import {
    NeedsList,
} from '../data/DAO/DAO_needs&getAllProductions.js'


const getAllneeds = (request, response) => {
    NeedsList()
        .then(list => response.send(list))
}

const getAllProductions = (request, response) => {
    ProductionsList()
        .then(list => response.send(list))
}

export {
    getAllneeds,
    getAllProductions,
}