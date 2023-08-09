import axios from "axios";
import {toast} from "react-toastify";
import { store } from "../reducers/todolist";

export const getUserTodo=(setLoading,dataUser)=> async(dispatch)=>{
    try{
        // making request 
        const request=await axios.get(`${process.env.REACT_APP_TODO_API}tasks?userId=${dataUser.id}&order=desc&sortBy=id`,{
            headers:{
                "Content-Type" : "application/json",
            },
        });
        if(!(request?.status >= 200 && request?.status < 300) ) throw new Error("Error When accessed that");
        //  dispatch(setDataDetail({data:request?.data?.data}));
        // store data
        dispatch(store(request?.data))

    }catch(error){
        // if error form axios
        if(axios.isAxiosError(error)){
            toast.error(error?.response?.message);
            return;
        }
        toast.error(error?.message);
    }
    if(typeof(setLoading) ==="function"){
        setLoading(false);
    }


}
export const sendTodo=(dataBody,setLoading)=>async(dispatch,getState)=>{
    try{
        const {dataUser}=getState().Auth;
        const request=await axios.post(`${process.env.REACT_APP_TODO_API}tasks`,{
            ...dataBody
        },
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        )
        if(!(request.status>=200 && request.status <300)) throw new Error("Opps..got error when send data");
        
        // called readdata
        dispatch(getUserTodo(null,{id:dataUser.id}));
        toast.success(`Successfully, ${request?.statusText} New Data`,{position:"top-right"})
    }
    catch(error){
        // if error form axios
        if(axios.isAxiosError(error)){
            toast.error(error?.response?.message);
            return;
        }
        toast.error(error?.message);
    }
    setLoading(false);
}
export const updateTodo=(data,dataUser,setLoading)=>async(dispatch)=>{
    try{
        // request
        const request=await axios.put(`${process.env.REACT_APP_TODO_API}tasks/${dataUser.id}`,{
            ...data
        },
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        )
        if(!(request.status>=200 && request.status <300)) throw new Error("Opps..got error when send data");
    
        // read again
        dispatch(getUserTodo(null,{id:dataUser.userId}))
        toast.success(`Successfully, update new data ${data.title}`,{position:"top-right"})   
        
    }
    catch(error){
        // if error form axios
        if(axios.isAxiosError(error)){
            toast.error(error?.response?.message);
            return;
        }
        toast.error(error?.message);
    }
    setLoading(false);
}
export const deleteTodo=(data,setLoading)=>async(dispatch)=>{
    try{
        // request
        const request=await axios.delete(`${process.env.REACT_APP_TODO_API}tasks/${data.id}`,
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        )
        if(!(request.status>=200 && request.status <300)) throw new Error("Opps..got error when send data");
    
        // read again the user 
        dispatch(getUserTodo(null,{id:data.userId}))
        toast.success(`Successfully, delete `,{position:"top-right"})   
        
    }
    catch(error){
        // if error form axios
        if(axios.isAxiosError(error)){
            toast.error(error?.response?.message);
            return;
        }
        toast.error(error?.message);
    }
    setLoading(false);
}