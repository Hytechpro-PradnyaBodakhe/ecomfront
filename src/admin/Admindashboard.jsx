import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adminmenu from '../assets/Adminmenu';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../context/auth'

function Admindashboard() {

  const [auth]=useAuth()

  return (
    <div className="container-fluid">
      <Row >
        <Col md={3}>
        <Adminmenu/> 
      
        </Col>
        <Col md={3}>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Admin Name :{auth.user.name}</Card.Title>
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

export default Admindashboard
