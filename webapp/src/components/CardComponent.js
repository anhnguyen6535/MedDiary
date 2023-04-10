import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import useStateContext from '../hooks/useStateContext';

function CardComponent(prop) {
  const { setContext } = useStateContext();
  const navigate = useNavigate()

  const clickHandler = () =>{
    setContext({isDoctor: prop.isDoctor})
    navigate('/login')
  }

  const clickRegister = () => {
    setContext({isDoctor: prop.isDoctor})
    navigate('/pre-register')
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prop.pic} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Button variant="primary" onClick={clickHandler}>Log in</Button>
        
      <Button variant='link' onClick={clickRegister}>Register</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;