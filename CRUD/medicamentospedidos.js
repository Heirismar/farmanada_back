import * as datos from '../base_datos.js';
let base=datos;

//MEDICAMENTOSPEDIDOS
base.app.get("/medicamentospedidos", (req, res) => {
    const sql =" SELECT medicamentospedidos.id as id, medicamentospedidos.idOrden as orden_compra, medicamento.nombre as medicamento, presentacion.cantidad as cantidad, presentacion.nombre as presentacion, presentacion.contenido as contenido, presentacion.unidad_medida as unidad_medida, medicamentospedidos.cantidad as cantidad_solicitada FROM (((medicamentospedidos INNER JOIN medicamento_presentacion ON medicamentospedidos.idMedicamento_presentacion=medicamento_presentacion.id) INNER JOIN medicamento ON medicamento_presentacion.id_Medicamento=medicamento.id) INNER JOIN presentacion ON medicamento_presentacion.id_Presentacion=presentacion.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamentospedidos", (req, res) => {
    const sql =`insert into medicamentospedidos (idOrden, idMedicamento_presentacion, cantidad) values ("${req.body.idOrden_medicamentospedidos}","${req.body.idMedicamento_presentacion_medicamentospedidos}","${req.body.cantidad_medicamentospedidos}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/medicamentospedidos", (req, res) => {
    const sql = `update medicamentospedidos set ${req.body.propiedad_medicamentospedidos} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_medicamentospedidos, req.body.id_update_medicamentospedidos], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamentospedidos", (req, res) => {
   const sql =`delete from medicamentospedidos where id = ?`;
    base.con.query(sql,[req.body.id_delete_medicamentospedidos], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});
export default base;
