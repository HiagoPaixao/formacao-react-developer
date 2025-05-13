
import Input from './components/Input'
import Button from './components/Button'

import {Container, Content, Row} from './styles'
import { useState } from 'react';

const App = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const handleClear = () => {
    setCurrentValue("");
  }

  const handleAddValue = (value) => {
    setCurrentValue(prev => `${prev}${value}`);
  }

  const handleSetOperation = (op) => {
    if (currentValue === "") return;
    if (firstNumber === null) {
      setFirstNumber(currentValue);
      setOperation(op);
      setCurrentValue("");
    } else {
      result = handleEquals();
    }
  }

  const handleEquals = () => {
    if (operation === '+') {
      const sum = Number(firstNumber) + Number(currentValue);
      setCurrentValue(String(sum));
    } else if (operation === '-') {
      const sub = Number(firstNumber) - Number(currentValue);
      setCurrentValue(String(sub));
    } else if (operation === '*') {
      const mult = Number(firstNumber) * Number(currentValue);
      setCurrentValue(String(mult));
    } else if (operation === '/') {
      const div = Number(firstNumber) / Number(currentValue);
      setCurrentValue(String(div));
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentValue}>        
        </Input>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="/" onClick={()=>handleSetOperation('/')}/>
          <Button label="*" onClick={()=>handleSetOperation('*')}/>
          <Button label="-" onClick={()=>handleSetOperation('-')}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddValue('7')}/>
          <Button label="8" onClick={()=>handleAddValue('8')}/>
          <Button label="9" onClick={()=>handleAddValue('9')}/>
          <Button label="+" onClick={()=>handleSetOperation('+')}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleAddValue('4')}/>
          <Button label="5" onClick={()=>handleAddValue('5')}/>
          <Button label="6" onClick={()=>handleAddValue('6')}/>
          <Button label="=" onClick={handleEquals}/>
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
