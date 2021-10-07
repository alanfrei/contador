import {Container} from './styled'

export default function Son(props){
    function reset(){
      props.onReset()
    }
    return(
      <Container>
        <div className="qtd-son">{props.qtd}</div>
        <button className="button-son" onClick={reset}>reset</button>
      </Container>
    )
}