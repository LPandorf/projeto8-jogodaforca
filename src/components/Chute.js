

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