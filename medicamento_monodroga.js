let base=require('./base_datos');

//MEDICAMENTO_MONODROGA
base.app.get("/medicamento_monodroga", (req, res) => {
    const sql =" SELECT medicamento_monodroga.id as id, medicamento.nombre as medicamento, monodroga.nombre as monodroga FROM ((medicamento_monodroga INNER JOIN medicamento ON medicamento_monodroga.id_Medicamento=medicamento.id) INNER JOIN monodroga ON medicamento_monodroga.id_Monodroga=monodroga.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamento_monodroga", (req, res) => {
    const sql =`insert into medicamento_monodroga (id_Monodroga,id_Medicamento) values ("${req.body.monodroga}","${req.body.medicamento}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

console.log(module);