import { Router } from 'express';
import { libro } from './controller.js';


export const router = Router();

router.get('/libros', libro.getAll);  //para todos

router.get('/libro', libro.getOne)   //para uno

router.post('/libro', libro.add); //añadir libro

router.delete('/libroISBN', libro.deleteISBN); //eliminar libro por ISBN

router.delete('/libroID', libro.deleteID); //eliminar libro por ID

router.put('/libro', libro.update); //actualizar libro