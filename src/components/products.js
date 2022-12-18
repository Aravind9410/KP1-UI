import React, { useContext, useState, useEffect } from "react";
import { Dispatch, State } from './context';
import { getProducts } from "./services/productService";
import { actionGetItems } from "./reducer/actionTypes";

function Products(){
    const data=useContext(State);
    const dispatch=useContext(Dispatch);

    useEffect(()=>{
        getProducts().then((res)=>{
            dispatch(actionGetItems(res.data));
       });
    },[]);

    return <>

    <div className="row table-row" style={{marginTop:"100px"}}>
        <table className="table table-bordered table-striped" style={{maxWidth:"700px",margin: "auto",marginTop:"8px"}}>
            <thead>
                <tr style={{fontFamily:'verdana',fontSize:'12px'}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.itemList.map(row=>
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    
    </>
}
export default Products;