import { Router } from 'express';
import { libro } from './controller.js';


export const router = Router();

router.get('/libros', libro.getAll);  //para todos

router.get('/libro', libro.getOne)   //para uno

router.post('/libro', libro.add); //añadir libro

router.delete('/libro', libro.delete); //eliminar libro

router.put('/libro', libro.update); //actualizar libro