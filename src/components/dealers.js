import React, { useContext,useState,useEffect } from "react";
import { State, Dispatch } from './context';
import { Button} from "react-bootstrap";
import {MdEdit,MdDelete} from 'react-icons/md';
import DealerModal from "./modals/dealerModal";
import ConfirmModal from "./modals/confirmModal";
import { actionGetDealers } from "./reducer/actionTypes";
import { getDealers, addDealer, updateDealer, deleteDealer } from "./services/dealerService";

function Dealers(){
    const [isOpen, setIsOpen]=useState(false);
    const [isDealerOpen, setIsDealerOpen]=useState(false);
    const [isLoading, setIsLoading]=useState(false);
    const [selectedRow, setSelectedRow]=useState();
    const [refresh, setRefresh]=useState();
    const data=useContext(State);
    const dispatch=useContext(Dispatch);

    useEffect(()=>{
        setIsLoading(true);
        getDealers().then((res)=>{
            dispatch(actionGetDealers(res.data))
       });
    },[refresh]);

    const handleSave=(newDealer)=>{
        addDealer(newDealer).then(res=>{
            setRefresh(!refresh);
            setIsDealerOpen(!isDealerOpen);
        })
    }
    const handleUpdate=(dealer)=>{
        updateDealer(dealer).then(res=>{
            setRefresh(!refresh);
            setIsDealerOpen(!isDealerOpen);
        })
    }
    const handleOk=(row)=>{
       if(row?.id>0){
        handleUpdate(row);
       }else{
        handleSave(row);
       }
    }

    const handleEdit=(row)=>{
        setIsDealerOpen(!isDealerOpen);
        setSelectedRow(row);
    }
    const deleteItem=(row)=>{
        deleteDealer(row.id).then((res)=>{
            setRefresh(!refresh);
            setIsOpen(!isOpen);
        })
    }
    
    const handleDelete=(row)=>{
        setIsOpen(true);
        setSelectedRow(row);
    }

    const handleAdd=()=>{
        setIsDealerOpen(true);
        setSelectedRow();
        
    }

    return <>
        <Button className="add-button" onClick={handleAdd}>Add New Dealer</Button>
    <div className="row table-row">
        <table className="table table-bordered table-striped" style={{maxWidth:"700px",margin: "auto",marginTop:"8px"}}>
            <thead>
                <tr style={{fontFamily:'verdana',fontSize:'12px'}}>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.dealerList.map(row=>
                    <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.phone}</td>
                        <td>{row.city}</td>
                        <td>
                            <MdEdit size={20} title="Edit" style={{cursor:"pointer",color:"#337ab7"}} onClick={()=>handleEdit(row)}></MdEdit>
                            <MdDelete size={20} title="Delete" style={{marginLeft:"10px",cursor:"pointer",color:"#337ab7"}} onClick={()=>handleDelete(row)}></MdDelete>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        {
            isOpen && 
            <ConfirmModal 
                isOpen={isOpen} 
                title="Confirmation" 
                message="Are you sure want to delete?" 
                handleCancel={()=>{setIsOpen(false)}} 
                handleOk={()=>deleteItem(selectedRow)} 
            >
            </ConfirmModal>
        }
        {
            isDealerOpen && 
            <DealerModal 
                isOpen={isDealerOpen} 
                title="Add Dealer" 
                data={selectedRow}
                handleCancel={()=>{setIsDealerOpen(false)}} 
                handleOk={(updatedData)=>handleOk(updatedData)} 
            >
            </DealerModal>
        }
    </div>
    
    </>
}
export default Dealers;