import { Sequelize } from 'sequelize'

export default new Sequelize('farm',
                            'root',
                            'Pepette2022+', {
            dialect: 'mysql',
            host: 'localhost',
            logging: false,
})

