import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ModalComponent({show}) {
    const navigate = useNavigate()

  return (
    <Modal show={show}>
        <Modal.Header className='text-center'>
          <Modal.Title className='mx-auto'>Added Clinic Log!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button variant="success" onClick={() => navigate('/search-patient')}>
                Start new session
            </Button>
        </Modal.Footer>
    </Modal>
  )
}
