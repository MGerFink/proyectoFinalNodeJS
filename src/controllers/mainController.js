const { conn } = require('../db/dbconnect')

module.exports = {
   
    getListado: async (req, res) => {
        try{
            const [ registros ] = await conn.query(`SELECT * FROM items`) 
            res.json(registros)
            }catch (error) {
            throw error
            }finally{
            conn.releaseConnection()
        }
    },

    crearRegistro: async (req, res) => {
        const sql = `INSERT INTO items (nombre, precio, descripcion) VALUES (?,?,?);`
        const creado = await conn.query(sql, [req.body.item, parseFloat(req.body.precio), req.body.descripcion])
        //console.log(creado)
        res.redirect('/index.html')
        /*res.send(`<h2>Se hizo algo con ${req.body.create} en el create</h2><a href="dinamic/1">Regresar a la página anterior</a>`)*/
    },

    getModificar: async (req, res) => {
        const [modificar] = await conn.query(`SELECT * FROM items WHERE id=?`, req.params.id)
        res.render('modificar', {
            registro: modificar[0]
        })
    },
        
    actualizar: async (req, res) => {
        const sql = `UPDATE items SET nombre=?, precio=?, descripcion=? WHERE id=?`
        const {idMod, item, precio, descripcion} = req.body
        const modificado = await conn.query(sql, [item, precio, descripcion, idMod])
        res.redirect('/index.html')
    },

    eliminar: async (req, res) => {
        const eliminado = await conn.query(`DELETE FROM items WHERE id=?`, req.body.idEliminar)
        res.redirect('/index.html')
        
    }
}
