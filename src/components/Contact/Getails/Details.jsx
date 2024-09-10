
import { Row, Col } from 'react-bootstrap';

const Details = ({ data }) => {
  return (
    <Col md={12}>
      {data && data.length > 0 ? (
        <>
          
          <Row className="mb-4 g-4">
            <Col>
              <div className='d-flex flex-column align-items-center justify-content-center gap-2 text-center shadow-sm p-4 h-100 details-item'>
                <div className='fs-2'>{data[0].icon}</div>
                <div>
                  <h1 className='color-h fs-4'>{data[0].title}</h1>
                  <p className='color-h'>{data[0].text}</p>
                </div>
              </div>
            </Col>
          </Row>

         
          <Row className="g-4">
            {data.slice(1, 3).map((item, index) => (
              <Col key={index} md={6}>
                <div className='d-flex flex-column align-items-center justify-content-center gap-2 text-center shadow-sm p-4 h-100 details-item'>
                  <div className='fs-2'>{item.icon}</div>
                  <div>
                    <h1 className='color-h fs-4'>{item.title}</h1>
                    <p className='color-h'>{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <p>No contact information available</p>
      )}
    </Col>
  );
};

export default Details;
