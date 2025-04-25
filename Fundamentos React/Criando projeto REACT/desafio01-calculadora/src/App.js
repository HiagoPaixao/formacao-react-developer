
import Input from './components/Input'
import Button from './components/Button'

import {Container, Content, Row} from './styles'
import { useState } from 'react';
import { useEffect } from 'react';



const App = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [lastInput, setLastInput] = useState(null);

  const handleClear = () => {
    setCurrentValue("");
  }

  const handleAddValue = (value) => {
    setCurrentValue(prev => `${prev}${value}`);
  }

  const handleoperation = (operation) => {
    if (firstNumber === null) {
      setFirstNumber(currentValue);
      setOperation(operation);
      setCurrentValue("");
    } else {
      const result = executeOperation(Number(firstNumber), Number(currentValue), operation);
      setFirstNumber(result);
      setOperation(operation);
      setCurrentValue("");
    }
  }

  const executeOperation = (firstNumber, currentValue, operation) => {
    switch (operation) {
      case '+':
        return firstNumber + currentValue;
      case '-':
        return firstNumber - currentValue;
      case '*':
        return firstNumber * currentValue;
      case '/':
        return firstNumber / currentValue;
      default:
        return currentValue;
    }
  }
  // const handleSumNumbers = () => {
  //   if (firstNumber === null) {
  //     setFirstNumber(currentValue);
  //     setOperation('+');
  //     setCurrentValue("");
  //     handleClear();
  //   }else {
  //     const sum = Number(firstNumber) + Number(currentValue);
  //     setCurrentValue(String(sum));
  //   }
  // }

  // const handleSubNumbers = () => {
  //   if (firstNumber === null) {
  //     setFirstNumber(currentValue);
  //     setOperation('-');
  //     setCurrentValue("");
  //     handleClear();
  //   }else {
  //     const sum = Number(firstNumber) - Number(currentValue);
  //     setCurrentValue(String(sum));
  //   }
  // }

  const handleEquals = () => {
  if (firstNumber !== null && operation !== null) {

      const lastNumber = currentValue !== "" ? currentValue : lastInput;

      if (lastNumber == null) return;

      const result = executeOperation(Number(firstNumber), Number(lastNumber), operation);
      setCurrentValue(String(result));
      setFirstNumber(result);
      setLastInput(lastNumber);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentValue}>        
        </Input>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="/" onClick={()=>handleoperation('/')}/>
          <Button label="*" onClick={()=>handleoperation('*')}/>
          <Button label="-" onClick={()=>handleoperation('-')}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddValue('7')}/>
          <Button label="8" onClick={()=>handleAddValue('8')}/>
          <Button label="9" onClick={()=>handleAddValue('9')}/>
          <Button label="+" onClick={()=>handleoperation('+')}/>
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
