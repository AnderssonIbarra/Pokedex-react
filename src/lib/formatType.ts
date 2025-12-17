import type { Type } from "../interfaces/pokemon.response";
import { capitalize } from "./capitalize";

export const formatType = (types: Type[]) => {
  return types.map((t) => capitalize(t.type.name)).join(", ");
};
