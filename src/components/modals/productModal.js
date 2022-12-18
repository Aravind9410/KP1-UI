import React,{useState} from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";

function ProductModal({title,isOpen, data, handleCancel, handleOk}){
const [product,setProduct]=useState({
    id:data?.id ?? 0,
    name:data?.name??'',
    price:data?.price??'',

});
    return (<div>
        <Modal show={isOpen} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div>
                        <label>
                            Name
                        </label>
                        <input type="text" 
                           className="form-control"
                           value={product.name} 
                           onChange={(e)=>{setProduct({...product,name:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label>
                            Price
                        </label>
                        <input type="text" 
                           className="form-control"
                           value={product.price} 
                           onChange={(e)=>{setProduct({...product,price:e.target.value})}}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={()=>handleOk(product)}>
                    Save
                </Button>
            </Modal.Footer>

        </Modal>
    </div>)
}

export default ProductModal;