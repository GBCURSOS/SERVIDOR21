document
  .getElementById("form-buscar-id")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    fetch(
      `http://localhost:4100/api/personas/buscarPorId/${encodeURIComponent(id)}`
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
