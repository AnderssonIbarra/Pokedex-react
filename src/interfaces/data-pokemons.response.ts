export interface PokemonsData {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  isFavorite: boolean;
}
