import axios from 'axios';

const baseUrl="http://localhost:4000/";

export const getDealers=()=>{
   // return sampleData
    return axios.get(baseUrl+'dealers');
}

export const addDealer=(data)=>{
     return axios.post(baseUrl+'dealers',data);
 }

 export const updateDealer=(data)=>{
     return axios.put(baseUrl+'dealers/'+data.id,data);
 }

 export const deleteDealer=(id)=>{
    return axios.delete(baseUrl+'dealers/'+id);
}