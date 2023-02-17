
interface propsCardCozinha{
    mesa : number;
    prato : string;
    desc : string;
    obs : string;
}

export function CardCozinha(props:propsCardCozinha){



    function submitPrato () {

        console.log(`Prato da mesa: ${props.mesa}, pronto para entrega`)
    }

    return(
        <div className="rounded-t-xl w-96 overflow-hidden">
            <div className="bg-slate-400 pb-2">
                <div className="w-full bg-red-500 flex justify-center py-1">
                    <h1> MESA: {props.mesa.toString()} </h1>
                </div>
                <div className="p-2">
                    <p>Prato: {props.prato}</p>
                    <p>Descrição: {props.desc}</p>
                </div>
                <div className="flex flex-col items-center py-1 px-5">
                    <h2> OBS </h2>
                    <p className="w-full flex justify-center bg-red-500 rounded-xl"> 
                        {props.obs} 
                    </p>
                </div>
            </div>
            
            <div className="flex justify-center items-center py-1 hover:bg-green-200 hover:text-white">
                <button className="bg-green-300 px-3 py-1 text-xl w-full"
                onClick={submitPrato}>
                        Finalizar Prato
                </button>
            </div>
        </div>
    )
}