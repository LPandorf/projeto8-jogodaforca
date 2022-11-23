

export default function Letras(props){
    const {alfabeto, letrasUsadas, click} =props;
    return (
        <div className="container-letras">
            {alfabeto.map((letra) => (
                <button
                    onClick={() => click(letra)}
                    key={letra}
                    disabled={letrasUsadas.includes(letra)}
                >
                    {letra}
                </button>
            ))}
        </div>
    );
}
