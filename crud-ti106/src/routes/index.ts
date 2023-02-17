import { Router } from "express";
import {Request, Response} from "express"
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req:Request, res:Response) =>{
    res.send("SERVIDOR RODANDO 8D")
})

router.get('/usuarios',usuarioController.index)
//pagina de visualização
router.get('/cadastro', usuarioController.visualizapaginaCadastro)
//pagina de envio 
router.post('/cadastro', usuarioController.cadastroUsuario)

router.get('/editar/:id',usuarioController.editaUsuario)
//rota para editar
router.post('/editar/:id', usuarioController.atualizaUsuario)
//rota para excluir
router.get('/excluir/:id',usuarioController.deleteUsuario)

export default router

