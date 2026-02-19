const url = new URL("https://jsonplaceholder.typicode.com/users");

export async function recuperarConciertos() {
  const datatype = await fetch(url);
  const datos = await datatype.json();
  if (!datos) {
    return [];
  } else {
    return datos;
  }
}

export async function guardarConciertos(datos) {
  const datosJSON = JSON.stringify(datos);
  const datatype = await fetch(url, {
    method: "PUT",
    body: datosJSON,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await datatype.json();
  console.log(response);
}
