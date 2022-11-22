
import React, {useState} from "react";
import palavras from "../Palavras";
import forca0 from "/home/leticia/projeto8-jogodaforca/src/assets/forca0.png";
import forca1 from "/home/leticia/projeto8-jogodaforca/src/assets/forca1.png";
import forca2 from "/home/leticia/projeto8-jogodaforca/src/assets/forca2.png";
import forca3 from "/home/leticia/projeto8-jogodaforca/src/assets/forca3.png";
import forca4 from "/home/leticia/projeto8-jogodaforca/src/assets/forca4.png";
import forca5 from "/home/leticia/projeto8-jogodaforca/src/assets/forca5.png";
import forca6 from "/home/leticia/projeto8-jogodaforca/src/assets/forca6.png";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const imagens = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];

export default function App() {
    const [desabilitaInput,setDesabilitaInput] = useState(true);
    const [erros,setErros] = useState(0);
    const [palavraEscolhida,setPalavraEscolhida] = useState([]);
    const [palavrajogo,setPalavraJogo] = useState([]);
    const [letrasUsadas,setLetrasUsadas] = useState(alfabeto);

    function iniciarJogo(){
        setDesabilitaInput(false);
        setLetrasUsadas([]);
        sortearPalavra();
    }

    function sortearPalavra(){
        const p = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[p];
        const arrPalavra = palavra.split("");
        setPalavraEscolhida(arrPalavra);
        console.log(palavra);

        let tracos = [];
        arrPalavra.forEach((letra)=> tracos.push(" _"));
        setPalavraJogo(tracos);
    }

    function click(l){
        setLetrasUsadas([...letrasUsadas, l]);
        
    }

    return (
        <div className="conteiner-tela">
            <div className="container-forca">
                <img src={imagens[erros]} alt="imagem da forca"/>
                <button onClick={iniciarJogo}>Escolher palavra</button>
                <h1>{palavrajogo}</h1>
            </div>
            <div className="container-letras">
                {alfabeto.map((letra)=> 
                    <button onClick={()=>click(letra)} key={letra} disabled={letrasUsadas.includes(letra)} >{letra}</button>
                    
                )}
            </div>
            <div className="container-input">
                <span>Já sei a palavra!</span>
                <input disabled={desabilitaInput}/>
                <button>Chutar</button>
            </div>

        </div>
    );
}