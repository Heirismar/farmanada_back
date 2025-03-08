import * as datos from '../base_datos.js';
let base=datos;

//EMPLEADO
base.app.get("/empleado", (req, res) => {
    const sql =" select * from empleado";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/empleado", (req, res) => {
   const sql =`insert into empleado (id,nombre,apellido,telefono, email,direccion,fecha_ingreso, img) values ("${req.body.cedula_empleado}","${req.body.name_empleado}","${req.body.apellido_empleado}","${req.body.tlf_empleado}","${req.body.email_empleado}","${req.body.direccion_empleado}","${req.body.fecha_ingreso_empleado}", "${req.body.img_empleado}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/empleado", (req, res) => {
    const sql = `update empleado set ${req.body.propiedad_empleado} = ? where id = ?`;
    base.con.query(sql, [req.body.empleado_nuevo_valor, req.body.cedula_empleado_modificar], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/empleado", (req, res) => {
   const sql =`delete from empleado where (id) = ("${req.body.delete_cedula_empleado}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
