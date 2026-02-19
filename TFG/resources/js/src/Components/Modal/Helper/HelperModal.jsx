import { createContext, useState } from "react";

export const HelperModalContext = createContext();

export const HelperModalProvider = ({ children }) => {

    const [openCart, setOpenCart] = useState(false);


    return (
        <HelperModalContext.Provider value={{ openCart, setOpenCart }}>
            {children}
        </HelperModalContext.Provider>
    )
}


