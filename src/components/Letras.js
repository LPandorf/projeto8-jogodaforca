import styled from "styled-components";

export default function Letras(props){
    const {alfabeto, letrasUsadas, click}= props;
    return (
        <Teclado>
            {alfabeto.map((letra) => (
                <BotãoLetras
                    onClick={() => click(letra)}
                    key={letra}
                    disabled={letrasUsadas.includes(letra)}
                >
                    {letra}
                </BotãoLetras>
            ))}
        </Teclado>
    );
}

const Teclado = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 630px;
    margin-left: 50px;
    align-items: center;
`
const BotãoLetras=styled.button`
    width: 40px;
    height: 40px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    color: #39739d;
    margin: 4px;
    :hover{
        background-color: #b3d3ea;
        color: #2c5777;
        cursor: pointer;
    }
    :disabled{
        background-color: #9faab5;
        border: 1px solid #9faab5;
        color: #79818a;
        cursor: default;
    }
`
