import {Container} from './styled';
import {useState} from "react";
import Son from '../son'

export default function Father() {
  const[qtd, setQtd] = useState(0);

    function contar(){
      setQtd(qtd + 1)
    }

    function subtrair(){
      setQtd(qtd - 1)
    }

    function reset(){
      setQtd(0)
    }

  return (
    <Container>
      <div className="titulo-f">Contador</div>
      <button className="botao-f" onClick={contar}>↑</button>
      <div className="qtd-f">{qtd}</div>
      <button className="botao-f" onClick={subtrair}>↓</button>
      <Son onReset={reset} qtd={qtd}/>
    </Container>
  );
}
