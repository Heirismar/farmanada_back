import * as datos from '../base_datos.js';
let base=datos;

//ROTACION
base.app.get("/rotacion", (req, res) => {
    const sql =" SELECT rotacion.idRotacion as id, sucursal.nombre as sucursal, rotacion.idEmpleado as cedula_empleado, empleado.nombre as nombre, empleado.apellido as apellido, cargo.titulo as cargo, rotacion.fecha_inicio as fecha_inicio, rotacion.fecha_final as fecha_final FROM (((rotacion INNER JOIN sucursal ON rotacion.idSucursal=sucursal.id) INNER JOIN empleado ON rotacion.idEmpleado=empleado.id) INNER JOIN cargo ON rotacion.idCargo=cargo.id)  ORDER BY idRotacion";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/rotacion", (req, res) => {
    const sql =`insert into rotacion (idSucursal,idEmpleado,idCargo,fecha_inicio,fecha_final) values ("${req.body.rotacion_sucursal}","${req.body.rotacion_empleado}","${req.body.rotacion_cargo}","${req.body.rotacion_fecha_inicio}","${req.body.rotacion_fecha_final}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/rotacion", (req, res) => {
    const sql = `update rotacion set ${req.body.propiedad_rotacion} = ? where idRotacion = ?`;
    base.con.query(sql, [req.body.rotacion_nuevo_valor, req.body.id_update_rotacion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/rotacion", (req, res) => {
   const sql =`delete from rotacion where idRotacion = ?`;
    base.con.query(sql,[req.body.id_delete_rotacion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
