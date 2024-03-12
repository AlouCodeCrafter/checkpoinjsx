
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (  
    <div className="App">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/mack.jpg" width={"200px"}/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Price />
        <Card.Text>
        <Description />
        </Card.Text>
        <Button variant="primary">Acheter</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
