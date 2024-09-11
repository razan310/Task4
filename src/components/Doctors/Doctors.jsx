
import { Card, Row, Col } from 'react-bootstrap';
import Title from '../Counter/Title/Title';


function Doctors({ doctor }) {
  return (
    <div className="p-4 colorbgblue" >
      <Title title={'Doctors'} desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'} />
      
      <Row  className="g-4 p-4">
        {doctor.map((element, index) => (
          <Col key={index}  xs={12} sm={12} md={6} lg={3}
          className='p-2 '>
            <Card style={{ width: '100%',height:"" }} className='border-0 shadow '>
              <Card.Img variant="top" src={element.img} />
              <Card.Body className='p-4' >
                <Card.Title className='px-3 pt-3' style={{color:"#555555"}}>{element.name}</Card.Title>
                <Card.Text className='px-3 pb-3 fst-italic ' style={{color:"#b6b6b6",fontSize:"14px"}}>
                  {element.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Doctors;
