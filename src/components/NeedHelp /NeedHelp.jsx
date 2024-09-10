import React from 'react'
import './NeedHelp.css'

function NeedHelp() {
  return (
    <div className='bg-top p-5 mt-5 d-flex flex-column justify-content-center align-items-center' style={{height:'22rem'}}>
      <h1 className='text-light p-2 text-center '>In an emergency? Need help now?</h1>
      <p className='text-light text-center  mx-xl-5 p-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button type="button" className="btn btn-outline-light hovercolor p-2 " style={{width:'13rem'}}>Make an Appointment</button>
    </div>
  )
}

export default NeedHelp
