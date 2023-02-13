import { type } from 'os'
import {Model, DataTypes} from 'sequelize'
import{sequelize} from '../config/mysql'

export interface Userinterface extends Model{
    id: number,
    name: string,
    age: number
}

//INTEGER

export const User = sequelize.define<Userinterface>("User,",{

 id:{
    primaryKey:true,
    type: DataTypes.INTEGER
 },
 name:{
    type: DataTypes.STRING
 },
 age:{
    type:DataTypes.INTEGER,
    defaultValue: 18
 }

},{
    tableName: 'users',
    timestamps: false
})