import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearch } from '../context/search';
import { useNavigate } from 'react-router-dom'

function Searchinput() {
const [values,setValues]=useSearch()
  const navigate=useNavigate()

  function handleSearch(e)
  {
    e.preventDefault()
    fetch(`https://ecombackend-1-12hp.onrender.com/product/search-product/${values.keyword}`).then((res1)=>{ 
      res1.json().then((res2)=>{
        console.log(res2)
        setValues({...values,result:res2})
        navigate('/search')
      })
  })
  }
  return (
    <div>
   <Form inline onSubmit={handleSearch}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e)=>setValues({...values,keyword:e.target.value})}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </div>
  )
}

export default Searchinput
