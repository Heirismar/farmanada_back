let base=require('.base_datos');
//CARGO
base.app.get("/cargo", (req, res) => {
    const sql =" select * from cargo";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/cargo", (req, res) => {
   const sql =`insert into cargo (titulo) values ("${req.body.name}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/cargo", (req, res) => {
    const sql = `update cargo set titulo = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/cargo", (req, res) => {
   const sql =`delete from cargo where (id) = ("${req.body.id}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

console.log(module);