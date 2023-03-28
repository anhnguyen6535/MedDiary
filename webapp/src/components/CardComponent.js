import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import useStateContext from '../hooks/useStateContext';

function CardComponent(prop) {
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate()

  const clickHandler = () =>{
    setContext({isDoctor: prop.isDoctor})
    navigate('/login')
  }

  const clickRegister = () => {
    setContext({isDoctor: prop.isDoctor})
    navigate('/register')
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prop.pic} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" onClick={clickHandler}>Log in</Button>
        
      <Button variant='link' onClick={clickRegister}>Register</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;