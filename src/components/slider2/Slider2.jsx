
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

function Slider2({slider}) { 
  if (!slider || slider.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <div className="w-100">
      <Carousel style={{ height: '90vh' }}>
        {slider.map((element, index) => (
          <Carousel.Item key={index} style={{ height: '90vh' }}>
            <img 
              src={element.image} 
              alt={element.title}  
              className='position-absolute object-fit-cover w-100 h-100' 
              style={{ inset: 0}}
            />
            <Carousel.Caption style={{left:'10%',bottom: "2.25rem"}}>
              <div className='heroInfo d-flex flex-column align-items-center justify-content-evenly' >
                <h3 style={{fontSize: "2rem",fontWeight: "700",}}>
                                {element.title}</h3>
                <p>{element.text}</p>
                <button type="button" className="btn text-light bg-top py-2 px-4 ">Read More</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider2;
