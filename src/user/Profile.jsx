import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Usermenu from '../assets/Usermenu';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../context/auth'

function Profile() {
 const [auth]=useAuth()

  return (
    <div className="container-fluid">
      <Row >
        <Col md={3}>
      <Usermenu/>
        </Col>
        <Col md={3}>
        Profile page
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User Name :{auth.user.name}</Card.Title>
        <Card.Text>
        <h4>Email address : {auth.user.email}</h4>
        <h4>Address : {auth.user.address}</h4>
        <h4>Contact Number : {auth.user.phone}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

      </Row>
     
     
     </div>
  )
}


export default Profile
