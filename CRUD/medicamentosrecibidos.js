import * as datos from '../base_datos.js';
let base=datos;

//MEDICAMENTOSRECIBIDOS
base.app.get("/medicamentosrecibidos", (req, res) => {
    const sql =" SELECT medicamentosrecibidos.id as id, medicamentosrecibidos.idCompra as cod_compra, medicamento.nombre as medicamento, presentacion.cantidad as cantidad, presentacion.nombre as presentacion, presentacion.contenido as contenido, presentacion.unidad_medida as unidad_medida, medicamentosrecibidos.cantidad_Disp as cantidad_solicitada FROM (((medicamentosrecibidos INNER JOIN medicamento_presentacion ON medicamentosrecibidos.idMedicamento_presentacion=medicamento_presentacion.id) INNER JOIN medicamento ON medicamento_presentacion.id_Medicamento=medicamento.id) INNER JOIN presentacion ON medicamento_presentacion.id_Presentacion=presentacion.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamentosrecibidos", (req, res) => {
    const sql =`insert into medicamentosrecibidos (idCompra, idMedicamento_presentacion, cantidad_Disp) values ("${req.body.idCompra_medicamentosrecibidos}","${req.body.idMedicamento_presentacion_medicamentosrecibidos}","${req.body.cantidad_Disp_medicamentosrecibidos}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/medicamentosrecibidos", (req, res) => {
    const sql = `update medicamentosrecibidos set ${req.body.propiedad_medicamentosrecibidos} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_medicamentosrecibidos, req.body.id_update_medicamentosrecibidos], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamentosrecibidos", (req, res) => {
   const sql =`delete from medicamentosrecibidos where id = ?`;
    base.con.query(sql,[req.body.id_delete_medicamentosrecibidos], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
