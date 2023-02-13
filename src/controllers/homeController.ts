import { Request, Response } from 'express';

import { Product } from '../models/Product';

//importando o User
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    //finALL puxa as  infos do banco    
    let users = await User.findAll()

    //criar um usuário direto do código

    
     /*const user = User.build({
        name: 'Fulaninho',
        age: 15
    }) */
    res.render('pages/home', {
        users
    });
};
export const novousuario = async (req:Request, res:Response) =>{

    let name = req.body.name
    let age = parseInt(req.body.age)

    if(name&&age){
        
        const newUser = User.build({
            name,
            age
        })
        await newUser.save()
    }
    //pós salvar os dados redirecionar para home
    res.redirect('/')
}
