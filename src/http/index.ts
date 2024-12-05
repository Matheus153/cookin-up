import type ICategoria from "@/interfaces/ICategoria"
import type IReceita from "@/interfaces/IReceita"

async function obterDadosURL<T>(url: string) {
    const response = await fetch(url)
    const dados: T = await response.json()
    return dados
    // ou return response.json() as T
}

export async function obterCategorias() {
    return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
}

export async function obterReceitas() {
    return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/Matheus153/df47a31dd778f5064ad53c9c8a84e626/raw/5a3a7a1944598f2fd5af2dac9664a8c3f379125d/receitas.json')
}

/* export async function obterCategorias() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')

    const categorias: ICategoria[] = await response.json()

    return categorias
} */

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