import { HelpersIndexProvider } from "../INDEX/Helpers/HelpersIndex";
import { RouteHelperProvider } from "../ROUTE/Helpers/RouteHelper";
import { HelperTiendaProvider } from "../TIENDA/Helpers/HelperTienda";
import { HelperTicketsProvider } from "../TICKETS/Helper/HelperTickets";
import { HelperModalProvider } from "../Components/Modal/Helper/HelperModal";

function GlobalProvider({ children }) {
  return (
    
    <HelperModalProvider>
      <HelperTicketsProvider>
        <HelperTiendaProvider>
          <RouteHelperProvider>
            <HelpersIndexProvider>
              {children}
            </HelpersIndexProvider>
          </RouteHelperProvider>
        </HelperTiendaProvider>
      </HelperTicketsProvider>
    </HelperModalProvider>
  );
}

export default GlobalProvider;
