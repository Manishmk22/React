
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';


import React from 'react'

const Toasteradd = () => {
  const [show, setShow] = useState(false);

  return (
    <div>

    <ToastContainer className="position-fixed top-0 end-0 p-3" position='top-center'>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </ToastContainer>
          </div>
  )
}

export default Toasteradd
