//import styled from "styled-components";

export default function Chute(props) {
    const {desabilitaInput, chute, setChute, chutar}= props;
    return (
        <div className="container-input">
            <span>Já sei a palavra!</span>
            <input disabled={desabilitaInput} value={chute} onChange={(e) => setChute(e.target.value)} />
            <button onClick={chutar}>Chutar</button>
        </div>
    );
}
/*
const Chutometro=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 630px;
    margin-left: 50px;
`
const Botao=styled.button`
    background-color: #e1ecf4;
    border-radius: 5px;
    border: 1px solid #7aa7c7;
    font-size: 14px;
    font-weight: 800;
    color: #39739d;
    margin: 4px;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
    :hover {
        background-color: #b3d3ea;
        color: #2c5777;
        cursor: pointer;
    }
`
const Input=styled.input`
    height: 12px;
    width: 300px;
    border-radius: 5px;
    margin-right: 10px;
    padding: 10px;
    font-family: "Segoe UI";
    font-size: 15px;
`
const Span=styled.span`
    font-family: "Segoe UI";
    font-size: 18px;
    margin-right: 10px;
`*/