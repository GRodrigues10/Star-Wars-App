// Interfaces
export interface StarDataItem {
  _id: string;
  title: string;
  poster_url: string;
  backdrop_url?: string;
  description?: string; 
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

// URL da API direto
const API_URL = "https://api-star-wars-tl0s.onrender.com";

// Buscar filmes, séries e documentários por tipo
export const fetchByType = async (
  types: string | string[]
): Promise<StarDataItem[]> => {
  try {
    const res = await fetch(`${API_URL}/`);
    const data: StarDataItem[] = await res.json();

    if (Array.isArray(types)) {
      return data.filter((item) => types.some((t) => item.types.includes(t)));
    }

    return data.filter((item) => item.types.includes(types));
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
    throw new Error("Erro ao buscar dados");
  }
};

// Buscar lista de personagens
export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const res = await fetch(`${API_URL}/personagens`);
    const data: Character[] = await res.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar personagens:", err);
    throw new Error("Erro ao buscar personagens");
  }
};

// Buscar filme/série/documentário pelo ID
export const fetchDataId = async (id: string): Promise<StarDataItem> => {
  try {
    const res = await fetch(`${API_URL}/data/${id}`);
    const data: StarDataItem = await res.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar dados por ID:", err);
    throw new Error("Erro ao buscar dados");
  }
};

// Buscar personagem pelo ID (detalhes)
export const fetchCharacterId = async (
  id: string
): Promise<CharacterDetails> => {
  try {
    const res = await fetch(`${API_URL}/personagens/${id}`);
    const data: Character = await res.json();

    return {
      ...data,
      title: data.name,
    } as CharacterDetails;
  } catch (err) {
    console.error("Erro ao buscar personagem por ID:", err);
    throw new Error("Erro ao buscar personagem");
  }
};
