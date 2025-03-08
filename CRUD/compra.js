import * as datos from '../base_datos.js';
let base=datos;

//COMPRA
base.app.get("/medicamento_monodroga", (req, res) => {
    const sql =" SELECT medicamento_monodroga.id as id, medicamento.nombre as medicamento, monodroga.nombre as monodroga FROM ((medicamento_monodroga INNER JOIN medicamento ON medicamento_monodroga.id_Medicamento=medicamento.id) INNER JOIN monodroga ON medicamento_monodroga.id_Monodroga=monodroga.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamento_monodroga", (req, res) => {
    const sql =`insert into medicamento_monodroga (id_Orden	idLab	fecha	forma_pago	monto	estado_compra) values ("${req.body.monodroga}","${req.body.medicamento}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/medicamento_monodroga", (req, res) => {
    const sql = `update medicamento_monodroga set ${req.body.propiedad_medicamento_monodroga} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_medicamento_monodroga, req.body.id_medicamento_monodroga], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamento_monodroga", (req, res) => {
   const sql =`delete from medicamento_monodroga where id = ?`;
    base.con.query(sql,[req.body.id_m_m], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
