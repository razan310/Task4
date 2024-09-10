import Title from "../Counter/Title/Title";
import './Services.css'

function Services({ item }) {
  return (
    <>
      <Title title={"Services"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"} />
      <div className="d-flex flex-wrap align-items-center m-4 ">
        {item.map((element, index) => (
          <div key={index} className="col-xl-4 col-sm-12 col-md-6  mb-4 text-center d-flex flex-column align-items-center p-4">
            <div style={{ width: "80px", height: "80px" }} className="p-2 d-flex justify-content-center align-items-center mainn-color fs-1 shadow-sm rounded-circle">
              {element.icon}
            </div>
            <h3 className="p-2 fs-4 text-color-ser">{element.title}</h3>
            <hr className="borderdColor w-50 mx-auto " />
            <p className="p-2 text-color-ser ">{element.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
