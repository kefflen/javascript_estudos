import styled from 'styled-components'

//https://codepen.io/bineshperingat/pen/EyyMMo
export const Container = styled.div`
@keyframes gradient {
  0% {
    background: radial-gradient(circle at center, rgba( 255, 125 , 125, 0 ) 0%, #fff 0%, #fff 100%);
  }
  25% {
    background: radial-gradient(circle at center, rgba( 255, 125, 125, 0.3 ) 24%, #fff 25%, #fff 100%);
  }
  50% {
    background: radial-gradient(circle at center, rgba( 255, 125, 125, 0.5 ) 49%, #fff 50%, #fff 100%);
  }
  75% {
    background: radial-gradient(circle at center, rgba( 255, 125, 125, 0.8 ) 74%, #fff 75%, #fff 100%);
  }
  100% {
    color: #fff;
    background: radial-gradient(circle at center, #f88 99%, #fff 100%, #fff 100%);
  }
}
`

export const ButtonRipple1 = styled.button`
    width: 350px;
    height: 60px;
    border: none;
    border-radius: 5px;
    background: #fff;
    font-weight: bold;
    font-size: 1.1em;
    color: #666;
    box-shadow: 0 6px 6px #06f;
    outline: none;
  
  :active {
    /* set time duration to your needs */
    animation: gradient 100ms;
    background: #f88;
    color: #fff;
    box-shadow: none;
  }
`
export const Container2 = styled.div`

`

export const ButtonRipple2 = styled.button`
  background-position: center;
  transition: background 0.8s;

  :hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
  }

  :active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }

  //Estilos normais de um botão
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;

`

export const ButtonRipple3 = styled.button`
  background-position: center;
  transition: background 0.8s;

  :hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #aabbff 1%) center/15000%;

  }

  :active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }

  //Estilos normais de um botão
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;

`