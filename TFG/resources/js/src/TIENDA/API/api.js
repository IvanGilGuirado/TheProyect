export async function getMerch(categoriaActiva) {
    const url = new URL(
        "http://localhost:8080/merchandising/" + categoriaActiva,
    );
    console.log(url);
    
    const datatype = await fetch(url);
    const datos = await datatype.json();
    if (!datos) {
        return [];
    } else {
        return datos;
    }
}
