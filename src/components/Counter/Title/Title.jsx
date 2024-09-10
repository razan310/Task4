import './Title.css'

function Title({title,desc}) {
  return (
        <div className="p-2 d-flex flex-column align-items-center textPcolor " >
            <h1 className=" pt-4  fs-2 font-title-type">{title}</h1>
            <hr className="borderdColor fw-bold "/>
            <p className="p-2 text-center">{desc}</p>
        </div>
  )
}

export default Title
