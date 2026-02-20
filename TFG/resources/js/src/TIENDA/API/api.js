export async function getMerch(categoriaActiva) {
    const url = new URL(
        "http://localhost:8080/merchandising/" + categoriaActiva,
    );
    const datatype = await fetch(url);
    const datos = await datatype.json();
    if (!datos) {
        return [];
    } else {
        return datos;
    }
}

export async function getTickets() {
    const url = new URL(
        "http://localhost:8080/ticket/tickets",
    );  
    const datatype = await fetch(url);
    const datos = await datatype.json();
    if (!datos) {
        return [];
    } else {
        return datos;
    }
}
