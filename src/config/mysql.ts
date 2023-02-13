import {Sequelize} from "sequelize";

//importando dotenv para
//acessar as variaveis ambiente
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(

       process.env.mysql_db as string,
       process.env.MYSQL_USER as string,
       process.env.MYSQL_PASSWORD as string,
       {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
       }

)