import axios from 'axios';

const baseUrl="http://localhost:4000/";

export const getProducts=()=>{
   // return sampleData
    return axios.get(baseUrl+'products');
}

export const addProduct=(data)=>{
     return axios.post(baseUrl+'products',data);
 }

 export const updateProduct=(data)=>{
     return axios.put(baseUrl+'products/'+data.id,data);
 }

 export const deleteProduct=(id)=>{
    return axios.delete(baseUrl+'products/'+id);
}
