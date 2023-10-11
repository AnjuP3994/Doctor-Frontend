import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import DoctorReview from '../DoctorReview/DoctorReview'

function ViewDoctor() {

    const {id} = useParams()
    console.log(id);

    const [doctorDetails, setDoctorDetails] = useState({})

    const fetchData = async()=>{
        const {data} = await axios.get(`https://doctor-server-mqx5.onrender.com/doctors/${id}`) //backend path
        console.log(data);
        setDoctorDetails(data)
    }
    console.log(doctorDetails);

    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div>
        <Container className='px-5'>
            <Row className='px-5'>
                <Col className='my-5'>
                {/* image */}
                <div className='img-wrapper'>
                <img src="https://entranttechnologies.com/img/doctor_appointment_app_img.png" alt="" className='inner-img my-5 p-4' style={{width:'400px'}}/>
                </div>
                </Col>
                <Col style={{marginTop:'50px'}} className='my-5 p-4'>
                {/* content */}
                <ListGroup>
                    <ListGroup.Item><b className='me-2'>Name:</b> {doctorDetails.name}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Specialty:</b> {doctorDetails.specialty}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Hospital:</b> {doctorDetails.hospital}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Address:</b> {doctorDetails.address}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Phone No:</b> {doctorDetails.phone}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Email:</b> {doctorDetails.email}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Available Hours:</b> {doctorDetails.available_hours}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2 gap-2'>Available Days:</b> {doctorDetails.available_days}</ListGroup.Item>
                    <ListGroup.Item><b className='me-2'>Rating:</b> <i class="fa-solid fa-star text-warning me-1"></i><i class="fa-solid fa-star text-warning me-1"></i>
                    <i class="fa-solid fa-star text-warning me-1"></i><i class="fa-solid fa-star text-warning me-1"></i><i class="fa-solid fa-star-half-stroke text-warning me-1"></i>
                    {doctorDetails.rating}</ListGroup.Item>
                    <ListGroup.Item className='p-3'>
                        <DoctorReview review={doctorDetails.reviews}/>  
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ViewDoctor