import type ICategoria from "@/interfaces/ICategoria"

export async function obterCategorias() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')

    const categorias: ICategoria[] = await response.json()

    return categorias
}

/* return [
    {
        "nome": "Laticínios e Ovos",
        "ingredientes": ["Ovos", "Queijo", "Leite", "Manteiga", "Creme de Leite", "Iogurte", "Leite Condensado", "Sorvete"],
        "rotulo": "laticinios_e_ovos"
    },
    {
        "nome": "Farinhas e Fermentos",
        "ingredientes": ["Farinha de trigo", "Polvilho", "Farinha de rosca", "Canjica", "Farinha de mandioca", "Fubá", "Linhaça", "Fermento químico"],
        "rotulo": "farinhas_e_fermentos"
    }
] */