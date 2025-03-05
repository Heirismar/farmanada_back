require("./script.js");

//ENTIDADES INDEPENDIENTES

require("./CRUD/monodroga.js");
require("./CRUD/sucursal.js");
require("./CRUD/cargo.js");
require("./CRUD/medicamento.js");
require("./CRUD/accion_terapeutica.js");
require("./CRUD/empleado.js");
require("./CRUD/presentacion.js");
require("./CRUD/laboratorio.js");

//ENTIDADES DEPENDIENTES

require("./CRUD/medicamento_laboratorio.js");
require("./CRUD/medicamento_monodroga.js");
require("./CRUD/medicamento_accion_terapeutica.js");
require("./CRUD/medicamento_presentacion.js");
require("./CRUD/medicamentospedidos.js");
require("./CRUD/medicamentosrecibidos.js");
require("./CRUD/pedidos.js");
require("./CRUD/compra.js");
require("./CRUD/deudas.js");
require("./CRUD/rotacion.js");
require("./CRUD/stock.js");

