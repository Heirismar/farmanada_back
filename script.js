
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

  async function cargarMonodrogas() {
    try {
      const response = await fetch("http://localhost:7000/monodroga");
      if (!response.ok) throw new Error("Error en la solicitud: " + response.statusText);
  
      const data = await response.json();
      console.log("Datos recibidos:", data);
  
      const tbody = document.querySelector("#tablaMonodrogas tbody");
      tbody.innerHTML = ""; // Limpiar tabla antes de llenarla
  
      data.forEach(monodroga => {
        const tr = document.createElement("tr");
  
        const tdId = document.createElement("td");
        tdId.textContent = monodroga.id;
        tr.appendChild(tdId);
  
        const tdNombre = document.createElement("td");
        tdNombre.textContent = monodroga.nombre;
        tr.appendChild(tdNombre);
  
        tbody.appendChild(tr);
      });
  
    } catch (error) {
      console.error("Error al cargar los monodrogas:", error);
    }
  }
  
  window.onload = cargarMonodrogas;
  
  
  