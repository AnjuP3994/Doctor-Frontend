import React from 'react'
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
        <div>
            <Navbar className="bg-info p-3">
            <Navbar.Brand href="/" className='text-light fs-1 fw-bolder'>
                <img
                alt=""
                src="https://lordicon.com/icons/wired/flat/1222-online-doctor-consultation.gif"
                width="70"
                className="d-inline-block align-top rounded-pill ms-4 me-2"
                />{' '}
                Doctor Appointment Booking
            </Navbar.Brand>
            </Navbar>
        </div>
    </>
  )
}

export default Header