
import Input from './components/Input'
import Button from './components/Button'

import {Container, Content, Row} from './styles'
import { useState } from 'react';
import { useEffect } from 'react';



const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const handleClear = () => {
    setCurrentValue("0");
  }

  const handleAddValue = (value) => {
    setCurrentValue(prev => `${value}${prev}`);
  }


  return (
    <Container>
      <Content>
        <Input value={currentValue}>        
        </Input>
        <Row>
          <Button label="C" onClick={()=>handleClear()}/>
          <Button label="/" onClick={()=>handleAddValue('/')}/>
          <Button label="*" onClick={()=>handleAddValue('*')}/>
          <Button label="-" onClick={()=>handleAddValue('-')}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddValue('7')}/>
          <Button label="8" onClick={()=>handleAddValue('8')}/>
          <Button label="9" onClick={()=>handleAddValue('9')}/>
          <Button label="+" onClick={()=>handleAddValue('+')}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleAddValue('4')}/>
          <Button label="5" onClick={()=>handleAddValue('5')}/>
          <Button label="6" onClick={()=>handleAddValue('6')}/>
          <Button label="=" onClick={()=>handleAddValue('=')}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>handleAddValue('1')}/>
          <Button label="2" onClick={()=>handleAddValue('2')}/>
          <Button label="3" onClick={()=>handleAddValue('3')}/>
          <Button label="0" onClick={()=>handleAddValue('0')}/>
        </Row>

      </Content>
    </Container>
      
  );
}

export default App;
