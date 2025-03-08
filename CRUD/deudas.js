import * as datos from '../base_datos.js';
let base=datos;

//DEUDAS
base.app.get("/deudas", (req, res) => {
    const sql =" SELECT deudas.id as id, deudas.id_Compra as cod_Compra, sucursal.nombre as sucursal, sucursal.direccion as direccion_sucursal, deudas.fecha_pago as fecha_pago, deudas.Monto as monto, deudas.estado_deuda as estado_deuda FROM (deudas INNER JOIN sucursal ON deudas.id_Sucursal=sucursal.id)  ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/deudas", (req, res) => {
    const sql =`insert into deudas (id_Compra,id_Sucursal,fecha_pago,Monto,estado_deuda) values ("${req.body.id_Compra_deudas}","${req.body.id_Sucursal_deudas}","${req.body.fecha_pago_deudas}","${req.body.monto_deudas}","${req.body.estado_deudas}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/deudas", (req, res) => {
    const sql = `update deudas set ${req.body.propiedad_deudas} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_deudas, req.body.id_update_deudas], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/deudas", (req, res) => {
   const sql =`delete from deudas where id = ?`;
    base.con.query(sql,[req.body.id_delete_deudas], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});
export default base;
