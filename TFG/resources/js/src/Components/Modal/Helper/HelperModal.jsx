import { createContext, useState } from "react";

export const HelperModalContext = createContext();

export const HelperModalProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false);

    const [arrMerch, setArrMerch] = useState([]);

    const [arrTicket, setArrTicket] = useState([]);

    const addMerch = (producto) => {
        setArrMerch((prev) => [...prev, producto]);
        alert("Producto añadido ✅")
    };

    const removeMerch = (id) => {
        setArrMerch((prev) => prev.filter((p) => p.id !== id));
    };

    const addTicket = (producto) => {
        setArrTicket((prev) => [...prev, producto]);
        alert("Producto añadido ✅")
    };

    const removeTicket = (id) => {
        setArrTicket((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <HelperModalContext.Provider
            value={{ openCart, setOpenCart, arrMerch, addMerch, removeMerch, arrTicket, addTicket, removeTicket }}
        >
            {children}
        </HelperModalContext.Provider>
    );
};
