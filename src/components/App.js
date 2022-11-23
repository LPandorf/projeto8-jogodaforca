import React, {useState} from "react";
import styled from "styled-components";
import palavras from "../Palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
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
    const [palavraJogo,setPalavraJogo] = useState([]);
    const [letrasUsadas,setLetrasUsadas] = useState(alfabeto);
    const [chute,setChute] = useState();
    const [cor,setCor] = useState("preto");

    function iniciarJogo(){
        setDesabilitaInput(false);
        setLetrasUsadas([]);
        sortearPalavra();
        setCor("preto");
        setErros(0);
    }

    function sortearPalavra(){
        const p = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[p];
        const arrPalavra = palavra.split("");
        setPalavraEscolhida(arrPalavra);
        //console.log(palavra);
        let tracos = [];
        arrPalavra.forEach((letra)=> tracos.push(" _"));
        setPalavraJogo(tracos);
    }

    function click(l){
        setLetrasUsadas([...letrasUsadas, l]);
        if(palavraEscolhida.includes(l)){
            letraCorreta(l);
        }else{
            letraErrada(l);
        }
    }

    function letraCorreta(l){
        const novaPalavraJogo = [...palavraJogo];
        palavraEscolhida.forEach((letra, i)=>{
            if(palavraEscolhida[i]===l){
                novaPalavraJogo[i]=letra+' ';
            }
        });
        setPalavraJogo(novaPalavraJogo);
        if(!novaPalavraJogo.includes(" _")){
            setCor("verde");
            finalizarJogo();
        }
    }

    function letraErrada(l){
        const novosErros = erros+1;
        setErros(novosErros);
        if(erros+1===6){
            setCor("vermelho")
            finalizarJogo();
        }
    }

    function chutar(){
        let strPalavra=palavraEscolhida.join("");
        if(chute===strPalavra){
            setCor("verde");
        }else{
            setErros(6);
            setCor("vermelho");
        }
        finalizarJogo();
    }

    function finalizarJogo(){
        setLetrasUsadas(alfabeto);
        setDesabilitaInput(true);
        setChute("");
        setPalavraJogo(palavraEscolhida);

    }

    return (
        <Tela>
            <Jogo imagens={imagens} erros={erros} iniciarJogo={iniciarJogo} cor={cor} palavraJogo={palavraJogo} />
            <Letras alfabeto={alfabeto} letrasUsadas={letrasUsadas} click={click} />
            <Chute desabilitaInput={desabilitaInput} chute={chute} setChute={setChute} chutar={chutar}/>
        </Tela>
    );
}

const Tela=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`