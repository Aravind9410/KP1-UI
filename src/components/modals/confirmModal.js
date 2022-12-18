import React from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";

function ConfirmModal({title,isOpen, message, handleCancel, handleOk}){
    return (<div>
        <Modal show={isOpen} onHide={()=>handleCancel()}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCancel}>
                   Cancel
                </Button>
                <Button variant="primary" onClick={handleOk}>
                    Ok
                </Button>
            </Modal.Footer>

        </Modal>
    </div>)
}

export default ConfirmModal;