import Accordion from 'react-bootstrap/Accordion';
import Title from '../Counter/Title/Title';
import './Questions.css'; 

function Questions({ data }) {
  return (
    <div className='colorbgblue pb-4'>
      <Title title={'Frequently Asked Questions'} desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'} />
      <div className='m-5'>
      
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          {data.map((item, index) => (
            <Accordion.Item className='m-3 p-2 border  p-2 border-opacity-10' eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.qustion}</Accordion.Header>
              <Accordion.Body>
                {item.answar}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Questions;
