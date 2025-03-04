
function filtrarTabla() {
    const filtro = document.getElementById("busqueda").value.toLowerCase();
    const filas = document.querySelectorAll("#tablaMonodrogas tbody tr");
  
    filas.forEach(fila => {
      const nombre = fila.cells[1].textContent.toLowerCase();
      fila.style.display = nombre.includes(filtro) ? "" : "none";
    });
  }

  function filtrarTablaID() {
    const filtro = document.getElementById("cod").value.toLowerCase();
    const filas = document.querySelectorAll("#tablaMonodrogas tbody tr");
  
    filas.forEach(fila => {
      const id = fila.cells[0].textContent.toLowerCase();
      fila.style.display = id.includes(filtro) ? "" : "none";
    });
  }

  module.exports={filtrarTabla,filtrarTablaID};
  