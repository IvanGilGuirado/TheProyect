/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { recuperarTickets } from "../API/api";

export const HelperTicketsContext = createContext();

export const HelperTicketsProvider = ({ children }) => {
    let [tickets, setTickets] = useState([]);

    useEffect(() => {
        async function iniciar() {
            const resultado = await recuperarTickets()
            setTickets(resultado)
        }
        iniciar()
    }, [])

    return (
        <HelperTicketsContext.Provider value={{ tickets, setTickets }}>
            {children}
        </HelperTicketsContext.Provider>
    )
}


