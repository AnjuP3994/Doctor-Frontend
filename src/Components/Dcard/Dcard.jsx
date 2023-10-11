import React from 'react'
import Card from 'react-bootstrap/Card';
import './Dcard.css'
import { Link } from 'react-router-dom';

function Dcard({doctors}) {
    console.log(doctors);
  return (
    <>
        <div>
            <Link to={`/view/${doctors.id}`} style={{textDecoration:'none',color:'black'}}>
            <Card className='card border border-2 border-info'>
            <Card.Img variant="full" className='image px-5' src="https://entranttechnologies.com/img/doctor_appointment_app_img.png" />
            <Card.Body>
                <b>Name:</b> {doctors.name}
                <hr />
                <b>Specialty:</b> {doctors.specialty}
                <hr />
                <b>Hospital:</b> {doctors.hospital}
                <hr />
                <b>Rating:</b> <i class="fa-solid fa-star me-1"></i><i class="fa-solid fa-star me-1"></i><i class="fa-solid fa-star me-1"></i>
                <i class="fa-solid fa-star me-1"></i><i class="fa-solid fa-star-half-stroke me-1"></i> {doctors.rating}
            </Card.Body>
            </Card>
            </Link>
        </div>
    </>
  )
}

export default Dcard