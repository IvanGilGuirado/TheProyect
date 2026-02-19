import { useLocation } from "react-router-dom";
import NavBarIndex from "./NavBarIndex";
import NavbarRoutes from "./NavbarRoutes";



function Navbar() {
    
    const { pathname } = useLocation();

    return (

        <>
            {pathname === "/" ? <NavBarIndex /> : <NavbarRoutes />}

        </>
    )
}

export default Navbar;
