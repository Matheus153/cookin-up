import { MongoClient, Collection, type ConnectOptions } from 'mongodb';

import * as dotenv from "dotenv";
dotenv.config();

// Função para conectar ao banco de dados
let client: MongoClient;

export async function getCookinUpCollection(): Promise<Collection> {
    if (!client) {
        client = new MongoClient(process.env.MONGO_URL || "", {} as ConnectOptions);
        await client.connect();
    }

    const db = client.db("cookin-up");
    return db.collection("receitas");
}
// Exemplo de uso da função
async function fetchData() {
    try {
        const collection = await getCookinUpCollection();

        // Busca os documentos da coleção
        const documents = await collection.find({}).toArray();

        console.log("Documentos encontrados:", documents);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

fetchData();


