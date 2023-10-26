import {pool} from './database.js';

class LibroController{

    async getAll(req,res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }
    
    async getOne(req,res){
        const libro = req.body;
        const id = parseInt(libro.id);
        const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [id]);
        res.json(result);
    }

    async add(req,res){
        const libro = req.body;
        const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, yearpublicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.yearpublicacion, libro.ISBN]);
        res.json({"Se ha añadido un nuevo libro": result.insertId});
    }    

}
export const libro = new LibroController();