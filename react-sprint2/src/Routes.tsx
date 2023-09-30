import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services"
import ServicoDetalhe from "./pages/ServicoDetalhe";
import Relatorio from "./pages/Relatorio";
import Inicio from "./pages/Inicio";
import Teste from "./pages/Testes";


export default function Routes() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/servicos",
            element: <Services />
        },
        {
            path: "/detalhe/:id",
            element: <ServicoDetalhe />
        },
        {
            path: "/relatorios",
            element: <Relatorio />
        },
        {
            path: "/teste",
            element: <Teste />

        },

        {
            path: "/Inicio",
            element: <Inicio/>
        }

    ]);

    return <RouterProvider router={routes} />;
}