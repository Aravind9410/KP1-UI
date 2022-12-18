import React,{useState} from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";

function DealerModal({title,isOpen, data, handleCancel, handleOk}){
const [dealer,setDealer]=useState({
    id:data?.id ?? 0,
    name:data?.name??'',
    phone:data?.phone??'',
    email:data?.email??'',
    address:data?.address??'',
    city:data?.phone??'',
    pincode:data?.pincode??'',

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
                           value={dealer.name} 
                           onChange={(e)=>{setDealer({...dealer,name:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label>
                            Phone
                        </label>
                        <input type="text" 
                           className="form-control"
                           value={dealer.phone} 
                           onChange={(e)=>{setDealer({...dealer,phone:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input type="text" 
                           className="form-control"
                           value={dealer.email} 
                           onChange={(e)=>{setDealer({...dealer,email:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label>
                            Address
                        </label>
                        <textarea type="text" 
                           className="form-control"
                           value={dealer.address} 
                           onChange={(e)=>{setDealer({...dealer,address:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label>
                            City
                        </label>
                        <input type="text" 
                           className="form-control"
                           value={dealer.city} 
                           onChange={(e)=>{setDealer({...dealer,city:e.target.value})}}
                        />
                    </div>
                    <div>
                        <label>
                            Pincode
                        </label>
                        <input type="text" 
                           className="form-control"
                           value={dealer.pincode} 
                           onChange={(e)=>{setDealer({...dealer,pincode:e.target.value})}}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={()=>handleOk(dealer)}>
                    Save
                </Button>
            </Modal.Footer>

        </Modal>
    </div>)
}

export default DealerModal;