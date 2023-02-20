import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardCozinha } from '../components/CardCozinha';


interface dados {
    id: number;
    name: string;
    desc: string;
    mesa_id: number;
    obs:string;
}

export function ApiTest(){

    const [dados,setDados] = useState<dados[]>([])

    async function carregarDados() {
        const response = await axios.get<dados[]>('http://localhost:3333/cozinha');
        setDados(response.data);
      }

    useEffect(() => {
        carregarDados()
      }, []);

      console.log(dados)

    return (
        <>  
            <Link to={'/'}>
                <a>Home</a>
            </Link>
            <div className="h-screen w-full flex gap-3 break-all flex-wrap justify-center">
                {dados.map(d => {
                    return(
                        <CardCozinha desc={d.desc} obs={d.obs} mesa={d.mesa_id} prato={d.name} key={d.id}/>
                    )
                })}
            </div>
        </>
    )
}