document.getElementById("form-buscar").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  fetch(
    `http://localhost:4100/api/personas/buscarNombreApellido?nombre=${encodeURIComponent(
      nombre
    )}&apellido=${encodeURIComponent(apellido)}`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((persona) => {
      document.getElementById("resultado").innerHTML = persona
        ? `<p><b>${persona.nombre} ${persona.apellido}</b> (${persona.edad} años)</p>`
        : "<p>No encontrado</p>";
    })
    .catch(() => {
      document.getElementById("resultado").innerHTML =
        "<p>Error al buscar persona</p>";
    });
});
