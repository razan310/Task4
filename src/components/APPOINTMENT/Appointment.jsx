import { Button } from "react-bootstrap"
import Title from "../Counter/Title/Title"
import FormInput from "../FormInput/FormInput"
import './Appointment.css'


function Appointment() {
  return (
    <div className="colorbgblue py-5 ">
        <Title title={"MAKE AN APPOINTMENT"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
        <FormInput/>
        <div className="d-flex justify-content-center">
            <button type="button" className="btn d-flex justify-content-center bg-my-color text-light p-2 widthBtn">Make an Appointment</button>
        </div>
    </div>
  )
}

export default Appointment
