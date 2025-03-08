import * as datos from '../base_datos.js';
let base=datos;

//COMPRA
base.app.get("/compra", (req, res) => {
    const sql =" SELECT compra.id as id, compra.id_Orden as orden_compra, laboratorio.nombre as laboratorio, laboratorio.direccion as direccion_laboratorio, compra.fecha as fecha_compra, compra.forma_pago as forma_pago_compra, compra.monto as monto_compra, compra.estado_compra as estado_compra FROM (compra INNER JOIN laboratorio ON compra.idLab=laboratorio.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/compra", (req, res) => {
    const sql =`insert into compra (id_Orden, idLab, fecha, forma_pago, monto, estado_compra) values ("${req.body.id_Orden}","${req.body.idLab_compra}","${req.body.fecha_compra}","${req.body.forma_pago_compra}","${req.body.monto_compra}","${req.body.estado_compra}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/compra", (req, res) => {
    const sql = `update compra set ${req.body.propiedad_compra} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_compra, req.body.id_update_compra], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/compra", (req, res) => {
   const sql =`delete from compra where id = ?`;
    base.con.query(sql,[req.body.id_delete_compra], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
