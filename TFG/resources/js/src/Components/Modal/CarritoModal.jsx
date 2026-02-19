
//Importamos la función de React para renderizar un componente en otro lugar del DOM que no sea el div raíz (#root) por ejemplo document.x 
import { createPortal } from "react-dom";
import { useContext, useEffect } from "react";
import { HelperModalContext } from "./Helper/HelperModal";

// Recibe dos props: open → booleano que dice si el carrito está abierto
// onClose → función que cierra el carrito
function CarritoModal() {

    let { openCart, setOpenCart } = useContext(HelperModalContext)

    // Este efecto se ejecuta cada vez que cambia open.
    // Si open == true: Bloquea el scroll de la página.
    // Si open == false: Lo vuelve a activar.
    // Sin esto, podrías scrollear la web debajo del carrito.
    useEffect(() => {
        if (openCart) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [openCart]);
    // El [open] significa: Solo ejecuta esto cuando cambie open.

    // Si no esta abierto no se renderiza nada.
    if (!openCart) return null;

    return createPortal(
        <>

            <div className="cart-overlay" onClick={setOpenCart}></div>

            <div className="cart-drawer">
                <div className="cart-header">
                    <h3>Tu Carrito</h3>
                    <button className="btn-close" onClick={() => setOpenCart(false)}>✕</button>
                </div>

                <div className="cart-body">
                    Aquí irán los productos del carrito
                </div>

                <div className="cart-footer">
                    <button className="checkout-btn">IR A LA CAJA</button>
                </div>
            </div>
        </>,
        // Insertamos todo dentro del dom no virtual, para que no se cargue desde el componente.
        document.body
    );
}

export default CarritoModal;
