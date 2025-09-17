// Interfaces
export interface StarDataItem {
  _id: string;
  title: string;
  poster_url: string;
  backdrop_url?: string;
  description?: string; // adicione isso
  trailer_url?: string;
  cast?: string;
  age_rating?: string;
  duration?: string;
  seasons?: number;
  year?: number;
  types: string[];
}

export interface Character {
  _id: string;
  name: string;
  poster_url: string;
  backdrop_url?: string;
  description?: string;
  age?: number;
  side?: string;
  apprentices?: string[];
}

export interface CharacterDetails {
  _id: string;
  title: string;
  poster_url: string;
  backdrop_url?: string;
  description?: string;
  age?: number;
  side?: string;
  apprentices?: string[];
}

// Buscar filmes, séries e documentários por tipo
export const fetchByType = async (
  types: string | string[]
): Promise<StarDataItem[]> => {
  const res = await fetch("http://localhost:4000/");
  const data: StarDataItem[] = await res.json();

  if (Array.isArray(types)) {
    return data.filter((item) => types.some((t) => item.types.includes(t)));
  }

  return data.filter((item) => item.types.includes(types));
};

// Buscar lista de personagens
export const fetchCharacters = async (): Promise<Character[]> => {
  const res = await fetch("http://localhost:4000/personagens");
  const data: Character[] = await res.json();
  return data;
};

// Buscar filme/série/documentário pelo ID
export const fetchDataId = async (id: string): Promise<StarDataItem> => {
  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data: StarDataItem = await res.json();
  return data;
};

// Buscar personagem pelo ID (detalhes)
export const fetchCharacterId = async (
  id: string
): Promise<CharacterDetails> => {
  const res = await fetch(`http://localhost:4000/personagens/${id}`);
  const data: Character = await res.json();

  // Mapeia name para title e mantém os outros campos
  return {
    ...data,
    title: data.name,
  } as CharacterDetails;
};
