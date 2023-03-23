import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function gitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/roman-card.jpeg" />
            <Card.Body>
                <Card.Title>Roman Marchen</Card.Title>
                <Card.Text>
                    Gamer, fighter, father, software engineer, and awesome dude all around.  Hide your wife and moms lol
                </Card.Text>
                <Button variant="primary">Check me out</Button>
            </Card.Body>
        </Card>
    );
}

export default gitHubCard;