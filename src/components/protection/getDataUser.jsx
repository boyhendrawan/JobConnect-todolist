import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { getProfile } from '../../utilites/redux/Action/login';
import AnimationLoading from '../UI/AnimationLoading';

import { useNavigate } from 'react-router-dom';
const GetDataUser = () => {
    // define all  module
    const navigation=useNavigate();
    const dispatch=useDispatch();
    const [getIsLoading,setIsLoading]=React.useState(false);
    const {token,isLoggedIn}=useSelector(features=>features.Auth);
    React.useEffect(()=>{
        if(token && isLoggedIn){
            setIsLoading(true);
            dispatch(getProfile(setIsLoading));
        }else{
            navigation("/login")
        }

    },[dispatch,token,isLoggedIn,navigation])

    return(
        <>
        {getIsLoading && <AnimationLoading/>}
        {!getIsLoading && <Outlet/>}
        </>
    )
}

export default GetDataUser