import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlayerCard({player}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="w-75" variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;