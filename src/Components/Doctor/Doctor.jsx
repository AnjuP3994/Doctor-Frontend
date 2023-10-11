import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dcard from '../Dcard/Dcard';

function Doctor() {

  //To hold all Restaurant details as in the form of array
  const [Doctor, setDoctor] = useState([])

  const fetchData = async()=>{
    const response = await axios.get('https://doctor-server-mqx5.onrender.com/doctors')
    console.log(response.data); //array(10)
    setDoctor(response.data)
  }
  console.log(Doctor); //array(10)

  useEffect(()=>{
    fetchData() //function call
  },[])


  return (
    <>
      <div className='px-5 pt-5'>
          <Row>
          { Doctor.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3} className='mb-5'>
              <Dcard doctors={item}/>
            </Col>
        ))}   
          </Row>
      </div>
    </>
  )
}

export default Doctor