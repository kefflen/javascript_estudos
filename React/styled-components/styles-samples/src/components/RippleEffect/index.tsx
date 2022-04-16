import React from 'react';
import { ButtonRipple1, ButtonRipple2, ButtonRipple3, Container, Container2 } from './styled';

const RippleEffect: React.FC = () => {
  return (
    <>
      <Container>
        <ButtonRipple1>Teste</ButtonRipple1>
      </Container>
      <Container2>
        <ButtonRipple2>Teste2</ButtonRipple2>
        <ButtonRipple3>Teste 3</ButtonRipple3>
      </Container2>
    </>
  )
}

export default RippleEffect