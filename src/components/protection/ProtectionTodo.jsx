
import React,{useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useNavigate,Outlet } from 'react-router-dom';
const ProtectionTodo = () => {
    const navigate=useNavigate(); //get data 
    // const dispatch=useDispatch(); //access global file
    const {token,isLoggedIn}=useSelector(features=>features.Auth);
    useEffect(()=>{
        if(!(token&&isLoggedIn)) return navigate("/login")
        // dispatch(getProfile());
    },[token,isLoggedIn,navigate])
  return (
    <Outlet/>
  )
}

export default ProtectionTodo