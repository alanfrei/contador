import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid white;
    border-radius: 1em;

    padding: 2em;
    background-color: black;

    .titulo-f{
        color: #ffff;
        font: 5em arial;
    }

    .qtd-f{
        color:#ffff;
        font: 3em arial;
    }

    .botao-f{
        background-color: rgba(196, 196, 196, 0.2);
        color: white;
        border:  3px solid #FFB800;  
        border-radius: 50em;
        font: 15px arial;
        font-weight: 600;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5em;
    }

`
export{Container}