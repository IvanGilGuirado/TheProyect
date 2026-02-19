import { createContext, useEffect, useState } from "react";
import { recuperarConciertos } from "../API/api";

// eslint-disable-next-line react-refresh/only-export-components
export const RouteHelperContext = createContext();

export const RouteHelperProvider = ({ children }) => {
    let [conciertos, setConciertos] = useState([]);

    useEffect(() => {
        async function iniciar() {
            const resultado = await recuperarConciertos()
            setConciertos(resultado)
        }
        iniciar()




    }, [])


    return (
        <RouteHelperContext.Provider value={{ conciertos, setConciertos }}>
            {children}
        </RouteHelperContext.Provider>
    )
}


