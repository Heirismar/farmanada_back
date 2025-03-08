import * as datos from "../base_datos.js";
let base = datos;

//PEDIDOS
base.app.get("/pedido", (req, res) => {
  const sql = " SELECT  pedido.id as id, empleado.id as id_empleado, empleado.nombre as nombre_empleado, empleado.apellido as apellido_empleado, sucursal.nombre as sucursal, sucursal.direccion as direccion_sucursal, pedido.fecha as fecha, pedido.forma_pago as forma_pago FROM ((pedido INNER JOIN empleado ON pedido.idEmpleado=empleado.id) INNER JOIN sucursal ON pedido.idSucursal=sucursal.id) ORDER BY id";
  base.con.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

base.app.post("/pedido", (req, res) => {
  const sql = `insert into pedido (idEmpleado,idSucursal,fecha,forma_pago) values ("${req.body.empleado_pedido}","${req.body.sucursal_pedido}","${req.body.fecha_pedido}","${req.body.forma_pago_pedido}")`;
  base.con.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

base.app.put("/pedido", (req, res) => {
  const sql = `update pedido set ${req.body.propiedad_pedido} = ? where id = ?`;
  base.con.query( sql, [req.body.nuevo_valor_pedido, req.body.id_update_pedido], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result);
    }
  );
});

base.app.delete("/pedido", (req, res) => {
  const sql = `delete from pedido where id = ?`;
  base.con.query(sql, [req.body.id_delete_pedido], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
  console.log(req.body);
});
export default base;
