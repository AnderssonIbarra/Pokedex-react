import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PokemonsProvider } from "./context/PokemonsContext";

const queryClient = new QueryClient();

export const PokedexApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonsProvider>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </PokemonsProvider>
    </QueryClientProvider>
  );
};
