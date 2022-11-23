

export default function Jogo(props){
    const {imagens, erros, cor, palavraJogo, iniciarJogo}= props;
    
    return(
        <div className="container-forca">
            <img src={imagens[erros]} alt="imagem da forca"/>
            <button onClick={iniciarJogo}>Escolher palavra</button>
            <h1 className={cor}>{palavraJogo}</h1>
        </div>
    );
}