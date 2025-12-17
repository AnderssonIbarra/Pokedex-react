**Pokedex**

- **Descripción:** Aplicación educativa que lista Pokémons, permite marcarlos como favoritos y navegar entre pantallas de bienvenida y lista. Proyecto de práctica usando React + TypeScript.

**Tecnologías principales**

- **Framework:** React 19
- **Bundler / Dev:** Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Ruteo:** react-router v7
- **HTTP:** axios
- **State / Context:** React Context API (Proveedor de Pokémons)
- **Query / Devtools:** @tanstack/react-query (en dependencias)
- **Testing:** Vitest (devDependency)

**Scripts útiles**

```bash
npm install
npm run dev     # iniciar servidor de desarrollo
npm run build   # build de producción
npm run preview # previsualizar build
```

**Estructura de carpetas (resumen)**

La estructura principal del proyecto es:

```
.
├── public/
├── src/
│   ├── api/
│   │   └── pokemonApi.ts          # configuración axios
│   ├── context/
│   │   └── PokemonsContext.tsx    # Context API para pokémons
│   ├── interfaces/                 # tipos y respuestas de la API
│   ├── lib/                        # utilidades (capitalize, formatType)
│   ├── mock/                       # mocks para desarrollo
│   ├── pokedex/
│   │   ├── actions/                # acciones relacionadas a pokedex
│   │   ├── components/             # componentes UI reutilizables
│   │   ├── hooks/                  # hooks locales (usePokemon)
│   │   ├── layouts/                # layout específico de Pokedex
│   │   └── pages/                  # páginas (PokemonsPage)
│   ├── routes/                     # guards / rutas protegidas
│   ├── welcome/
│   │   ├── actions/                # actions (fetch inicial / handle started)
│   │   ├── components/             # componentes de bienvenida
│   │   └── pages/                  # WelcomePage
│   ├── app.router.tsx              # definición de rutas
│   ├── main.tsx                    # punto de entrada React
│   └── PokedexApp.tsx              # App wrapper
├── index.html
├── package.json
└── vite.config.ts
```

**Descripción breve de carpetas clave**

- `src/api`: cliente axios y llamadas a la API de PokéAPI.
- `src/context`: proveedor global de pokémons y funciones para gestionar favoritos.
- `src/pokedex`: UI y lógica de la pantalla principal (lista, detalle, componentes).
- `src/welcome`: pantallas y acciones iniciales (carga inicial y guardado en localStorage).

**Cómo funciona la carga inicial**

- Al pulsar "Get started" la app comprueba `localStorage` por la key `data-pokemon`. Si no existe, se consulta la API y se guarda la respuesta en `localStorage` y en el `PokemonsContext` antes de navegar a `/pokedex`.

**Cambios recientes (actualizaciones importantes)**

- `handleStarted` ahora devuelve los datos en vez de ejecutar `navigate` directamente. El componente llama a `handleStarted()`, guarda los resultados en el contexto y luego navega.
- `PokemonsContext` expone ahora `loading` y `setLoading` además de `pokemons` y `setPokemons`. Esto permite controlar una pantalla de carga global mientras se inicializa la data.
- `WelcomePage` usa `setLoading(true)` antes de la petición y `setLoading(false)` después; mientras `loading === true` muestra el componente `CustomLoading`.
- `ProtectedRoutes` fue actualizado para usar `loading` y mostrar `CustomLoading` durante la inicialización, evitando redirecciones prematuras cuando la app aún está cargando datos.
- Componente de carga: `src/components/CustomLoading.tsx` (overlay con `IconLoading`).

**Notas y mejoras sugeridas**

- Añadir pruebas unitarias para acciones y hooks.
