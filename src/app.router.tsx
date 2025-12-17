import { createBrowserRouter, Navigate } from "react-router";
import { PokedexLayout } from "@/pokedex/layouts/PokedexLayout";
import { WelcomePage } from "@/welcome/pages/WelcomePage";
import { PokemonsPage } from "@/pokedex/pages/PokemonsPage";
import { DataExists, NotDataExists } from "./routes/ProtectedRoutes";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <NotDataExists>
        <WelcomePage />
      </NotDataExists>
    ),
  },
  {
    path: "/pokedex",
    element: (
      <DataExists>
        <PokedexLayout />
      </DataExists>
    ),
    children: [
      {
        index: true,
        element: <PokemonsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
