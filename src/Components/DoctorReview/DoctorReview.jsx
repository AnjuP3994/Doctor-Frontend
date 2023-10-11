import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function DoctorReview({review}) {
  console.log(review);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Review
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            {
              review?.map((item)=>(
                <div className='my-3'>
                    <h6>Name: {item.patient_name}</h6>
                    <h6>Date: {item.date}</h6>
                    <h6>Rating: <i class="fa-solid fa-star text-warning me-1"></i><i class="fa-solid fa-star text-warning me-1"></i>
                    <i class="fa-solid fa-star text-warning me-1"></i><i class="fa-solid fa-star text-warning me-1"></i>
                    <i class="fa-solid fa-star text-warning me-1"></i>{item.rating}</h6>
                    <h6>Comments: {item.comments}</h6>
                    <hr />
                </div>
            ))
            }
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default DoctorReview