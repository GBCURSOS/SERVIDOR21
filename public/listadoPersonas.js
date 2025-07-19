fetch("http://localhost:4100/api/personas/listadoPersonas")
  .then((res) => res.json())
  .then((personas) => {
    const ul = document.getElementById("lista");
    personas.forEach((p) => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${p.foto}" alt="${p.nombre}" style="width:40px;height:40px;border-radius:50%;vertical-align:middle;margin-right:10px;"> ${p.nombre} ${p.apellido} (${p.edad} años)`;
      ul.appendChild(li);
    });
  })
  .catch((err) => {
    document.body.innerHTML += "<p>Error al obtener personas</p>";
  });
