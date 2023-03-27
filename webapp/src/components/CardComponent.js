import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(prop) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prop.pic} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" onClick={prop.clickHandler}>Log in</Button>
        
      <Button variant='link'>Register</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;