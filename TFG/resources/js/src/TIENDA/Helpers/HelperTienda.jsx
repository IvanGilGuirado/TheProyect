import { createContext, useEffect, useState } from "react";
import { getMerch } from "../API/api";

// eslint-disable-next-line react-refresh/only-export-components
export const HelperTiendaContext = createContext();

export const HelperTiendaProvider = ({ children }) => {
    
    const [merch, setMerch] = useState([]);
    const [categoriaActiva, setCategoriaActiva] = useState("all");

    useEffect(() => {
        async function iniciar() {
            const resultado = await getMerch(categoriaActiva)
            setMerch(resultado)
        }
        iniciar()
    }, [categoriaActiva])




    return (
        <HelperTiendaContext.Provider value={{ merch, setMerch, categoriaActiva, setCategoriaActiva }}>
            {children}
        </HelperTiendaContext.Provider>
    )
}


