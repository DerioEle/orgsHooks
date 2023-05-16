import { useState, useEffect } from "react";

import { carregaProdutores } from "../servicos/carregaDados";

const ordernarLista = (a, b) => {
    if (a.distancia < b.distancia)
        return -1;
    if (a.distancia > b.distancia)
        return 1;
    return 0;
}

export default function useProdutores(){
    const [titulo, setTitulo] = useState("");
    const [lista, setLista] = useState([]);
    
    useEffect(() =>{
        const retorno = carregaProdutores();
        retorno.lista.sort(ordernarLista);
        
        setTitulo(retorno.titulo);
        setLista(retorno.lista); 
    }, [])

    return [titulo, lista];
}