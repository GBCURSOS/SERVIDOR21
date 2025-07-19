document.getElementById("form-crear").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const foto = document.getElementById("foto").value;
  fetch("http://localhost:4100/api/personas/crearPersona", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, apellido, edad, foto }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((persona) => {
      document.getElementById(
        "resultado"
      ).innerHTML = `<p>Persona creada: <b>${persona.nombre} ${persona.apellido}</b></p>`;
    })
    .catch(() => {
      document.getElementById("resultado").innerHTML =
        "<p>Error al crear persona</p>";
    });
});
