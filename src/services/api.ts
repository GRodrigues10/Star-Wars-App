// Função para buscar filmes, séries e documentários.
export const fetchByType = async (types: string | string[]) => {
  const data = await fetch("http://localhost:4000/");
  const response = await data.json();

  if (Array.isArray(types)) {
    // filtra se qualquer tipo estiver presente no card
    return response.filter((card: any) =>
      types.some((t) => card.types.includes(t))
    );
  }

  // caso seja apenas um tipo
  return response.filter((card: any) => card.types.includes(types));
};


// Função para buscar personagens
export const fetchCharacters = async () => {
  const data = await fetch('http://localhost:4000/personagens');
  const response = await data.json();
  return response;
}

// Função para buscar filmes pelo ID:

export const fetchDataId = async (id:any) => {
  const data = await fetch(`http://localhost:4000/data/${id}`);
  const response = await data.json();
  return response;
}