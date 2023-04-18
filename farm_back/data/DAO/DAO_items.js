import Items from '../models/model_Items.js'
import db from '../../db/db.js'
import { Sequelize, } from 'sequelize'

const itemsList = () => {
    return Items.sync({ alter: false }).then(() => {
        return db.query(`
            select i.id, i.nb, i.name name, i.id_stock, s.name name_stock from items i, stocks s 
                where i.id_stock = s.id`,
            {
                type: Sequelize.QueryTypes.SELECT,
                model: Items,
            })
    })
}

const itemsById = (id) => {
    return Items.findByPk(id)
}

const saveItem = (data) => {
    return data.save()
}

const sumOfItemsByStorPl = (data) => {
    // return Items.sync({alter:false}).then(()=>{
    //     return db.query(`
    //     select sum(nb) nb from items i, stocks s 
    //         where i.id_storage = s.id
    //         and s.id = :id;`,
    //     {type: Sequelize.QueryTypes.SELECT,
    //         model: Items,
    //         replacements: { id: data.id_sp },
    //     })
    // })
}


export  {
    itemsList, 
    itemsById,
    sumOfItemsByStorPl,
    saveItem,
}