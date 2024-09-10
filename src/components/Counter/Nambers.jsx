import { Card } from 'react-bootstrap'
import Counter from './Counter'
import './Namber.css'

function Nambers({info}) {
  return (
    <div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 p-5 row-gap-3'>
        {info.map((element, index) => (
            <div key={index}  className='col p-2' style={{height:'10rem'}}>
                <Card style={{height:'10rem'}} className='border-0 shadow radius-porder col p-4 text-start align-items-center' >
                <Card.Body className='d-flex flex-row al justify-content-center w-100'>
                        <Card.Title className='mainn-color d-flex flex-column px-3 font-Icon-namber-size justify-content-center'>{element.icon}</Card.Title>
                        <div className='w-100'>
                            <Card.Subtitle className="mb-2 text-muted fs-4 justify-content-center"> <Counter endNumber={element.namber} duration="5000"/></Card.Subtitle>
                            <Card.Text>
                                {element.text}
                        </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </div>
    ))}
    </div>
    </div>
  )
}

export default Nambers
