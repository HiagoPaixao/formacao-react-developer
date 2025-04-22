
import Input from './components/Input'
import Button from './components/Button'

import {Container, Content, Row, Column} from './styles'

const App = () => {
  return (
    <Container>
      <Content>
        <Input>        
        </Input>
        <Row>
          <Button label="1" onClick={1}/>
          <Button label="2" onClick={1}/>
          <Button label="3" onClick={1}/>
          <Button label="-" onClick={1}/>
        </Row>
        <Row>
          <Button label="4" onClick={1}/>
          <Button label="5" onClick={1}/>
          <Button label="6" onClick={1}/>
          <Button label="+" onClick={1}/>
        </Row>
        <Row>
          <Button label="1" onClick={1}/>
          <Button label="2" onClick={1}/>
          <Button label="3" onClick={1}/>
          <Button label="=" onClick={1}/>
        </Row>

      </Content>
    </Container>
      
  );
}

export default App;
