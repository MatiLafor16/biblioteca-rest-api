import {pool} from './database.js';

class LibroController{

    async getAll(req, res) {
        const [result]= await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async getOne(req, res){
        const libro = req.body;
        const id = parseInt(libro.id);
        const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [id]); 
        res.json(result);
    }

}

export const libro = new LibroController();