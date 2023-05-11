import React from 'react';
import Topo from  './componentes/Topo'
import Produtores from './componentes/Produtores';
import topo from '../../mocks/topo';


export default function Home(){
    return <Produtores topo = {Topo}/>
}