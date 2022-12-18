import React, { useContext, useState, useEffect } from "react";
import { Dispatch, State } from './context';
import {Button, Modal} from "react-bootstrap";
import {MdEdit,MdDelete} from 'react-icons/md';
import ConfirmModal from "./modals/confirmModal";
import ProductModal from "./modals/productModal";
import { getProducts, addProduct, deleteProduct, updateProduct } from "./services/productService";
import { actionGetItems } from "./reducer/actionTypes";

function AdminProducts(){
    const [isOpen, setIsOpen]=useState(false);
    const [isProductOpen, setIsProductOpen]=useState(false);
    const [isLoading, setIsLoading]=useState(false);
    const [selectedRow, setSelectedRow]=useState();
    const [refresh, setRefresh]=useState();
    const data=useContext(State);
    const dispatch=useContext(Dispatch);

    useEffect(()=>{
        setIsLoading(true);
        getProducts().then((res)=>{
            dispatch(actionGetItems(res.data));
            setIsLoading(false);
       });
    },[refresh]);

    const handleSave=(newProduct)=>{
        addProduct(newProduct).then(res=>{
            console.log("created",res)
            setRefresh(!refresh);
            setIsProductOpen(!isProductOpen);
        })
    }
    const handleUpdate=(product)=>{
        updateProduct(product).then(res=>{
            console.log("updated",res)
            setRefresh(!refresh);
            setIsProductOpen(!isProductOpen);
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
        setIsProductOpen(true);
        setSelectedRow(row);
    }

    const deleteItem=(row)=>{
        console.log("deleted", row)
        deleteProduct(row?.id).then((res)=>{
            console.log("deleted",res)
            setRefresh(!refresh);
        })

    }
    
    const handleDelete=(row)=>{
        setIsOpen(true);
        setSelectedRow(row);
    }

    const handleAddButton=()=>{
        setIsProductOpen(true);
        setSelectedRow();

    }

    return <>

    <Button className="add-button" onClick={handleAddButton}>Add New Product</Button>
    <div className="row table-row">
        
        <table className="table table-bordered table-striped" style={{maxWidth:"700px",margin: "auto",marginTop:"8px"}}>
            <thead>
                <tr style={{fontFamily:'verdana',fontSize:'12px'}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.itemList.map(row=>
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
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
            isProductOpen && 
            <ProductModal 
                isOpen={isProductOpen} 
                title="Add Product" 
                data={selectedRow}
                handleCancel={()=>{setIsProductOpen(false)}} 
                handleOk={(updatedData)=>handleOk(updatedData)} 
            >
            </ProductModal>
        }
    </div>
    
    </>
}
export default AdminProducts;