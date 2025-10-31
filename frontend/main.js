const apiLibros = "/api/libros";
const apiUsuarios = "/api/usuarios";
async function cargar(tablaId, url) {
  const res = await fetch(url);
  const datos = await res.json();
  const tabla = document.getElementById(tablaId);
  tabla.innerHTML = "<tr>" + Object.keys(datos[0] || {}).map(k => `<th>${k}</th>`).join("") + "<th>Acciones</th></tr>" +
    datos.map(item => `<tr>` + Object.keys(item).map(k => `<td>${item[k]}</td>`).join("") +
    `<td><button onclick="eliminar('${url}',${item.id})">🗑️</button></td></tr>`).join("");
}
async function eliminar(url, id) {
  await fetch(`${url}/${id}`, { method: "DELETE" });
  location.reload();
}
cargar("tablaLibros", apiLibros);
cargar("tablaUsuarios", apiUsuarios);