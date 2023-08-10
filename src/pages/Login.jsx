import React from 'react';
import useInput from '../utilites/customHooks/use-input';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login as requestLogin } from '../utilites/redux/Action/login';
import { toast } from "react-toastify";
function Login() {
  // define distpach for get global function
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    value: valueUsername,
    isInvalid: invalidUsername,
    handlerBlur: handleBlurUsername,
    handlerChange: handleChangeUsername,
    reset: resetUsername
  } = useInput(e => e.length===4);
 
  // handle when submit clicked
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (valueUsername.length === 0 ) return toast.error("Kamu harus mengisi semua form ", { position: toast.POSITION.TOP_CENTER });
    if(invalidUsername)return toast.error("Passcode kamu salah", { position: toast.POSITION.TOP_CENTER });
    dispatch(requestLogin({valueUsername}, navigate, resetUsername));
  }
  return (
    <>
    <div className='flex w-full absolute h-full justify-center items-center overflow-hidden'>
      <span className='bg-animation fill-mode-forwards'></span>
    </div>
    <div className='absolute w-full h-full  bg-white/60 backdrop-blur-md '>
      <div className='container mx-auto h-full font-main z-20'>
        <div className='grid grid-cols-1 h-full justify-items-center  content-center px-4'>
          <div className='bg-slate-50 shadow-md p-5 rounded-lg w-full max-w-md'>
            <h1 className='mb-5  text-center text-2xl font-bold tracking-wider '>Login</h1>
            
            <form onSubmit={handlerSubmit}>
              <div className='flex flex-col w-full h-full'>
                <label className='mb-2 font-normal text-lg'>Pass Codes</label>
                <input type='text' name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-btn block w-full p-2.5 " onChange={handleChangeUsername} onBlur={handleBlurUsername} value={valueUsername} placeholder="Input your passcode" />
                {invalidUsername && < p className="message-error-input">your Username must four digits</p>}
              </div>
             
              <div className='mt-4 flex justify-end'>
                <button className='text-white bg-btn hover:bg-card duration-[450ms] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-btn dark:hover:bg-btn dark:focus:ring-btn'>Submit</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login