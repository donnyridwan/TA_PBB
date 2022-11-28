import {Card, ListGroup, breakpoints} from 'react-bootstrap';

function User() {
    return (
    <div className='box'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="mid" src="https://media-exp1.licdn.com/dms/image/C5603AQFcZvcTiBpMWQ/profile-displayphoto-shrink_800_800/0/1632746818061?e=1674691200&v=beta&t=0dAs3KNvVgUtS99XjDWxZlEP2wJln9h_ZYXcQOB_ZFE" />
        <Card.Body>
        <Card.Title align="start">Donny Ridwan S</Card.Title>
            <Card.Text align="start">
            Aplikasi Olshop ini dibuat dengan React JS dengan menggunkan API fakestoreapi
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>21120120130083</ListGroup.Item>
            <ListGroup.Item>Praktikum PPB</ListGroup.Item>
            <ListGroup.Item>Kelompok 4</ListGroup.Item>
        </ListGroup>
    </Card>
    </div>
    );
}

export default User;