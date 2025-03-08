import * as datos from '../base_datos.js';
let base=datos;

//STOCK
base.app.get("/stock", (req, res) => {
    const sql =" SELECT stock.id as id, sucursal.nombre as sucursal, sucursal.direccion as direccion, medicamento.nombre as medicamento, presentacion.cantidad as cantidad, presentacion.nombre as presentacion, presentacion.contenido as contenido, presentacion.unidad_medida as unidad_medida, stock.cantidad_disponible as cantidad_disponible, stock.precio as precio FROM ((((stock INNER JOIN sucursal ON stock.id_sucursal=sucursal.id) INNER JOIN medicamento_presentacion ON stock.idMedicamento_presentacion=medicamento_presentacion.id) INNER JOIN medicamento ON medicamento_presentacion.id_Medicamento=medicamento.id) INNER JOIN presentacion ON medicamento_presentacion.id_Presentacion=presentacion.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/stock", (req, res) => {
    const sql =`insert into stock (id_sucursal,idMedicamento_presentacion,cantidad_disponible, precio) values ("${req.body.sucursal_stock}","${req.body.medicamento_stock}","${req.body.cantidad_stock}","${req.body.precio_stock}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/stock", (req, res) => {
    const sql = `update stock set ${req.body.propiedad_stock} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_stock, req.body.id_update_stock], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/stock", (req, res) => {
   const sql =`delete from stock where id = ?`;
    base.con.query(sql,[req.body.id_delete_stock], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
