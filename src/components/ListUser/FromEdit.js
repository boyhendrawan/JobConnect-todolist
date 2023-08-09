import React, { useRef,useState } from "react";
import MyModal from "../UI/Modal";
import { Dialog } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../utilites/redux/Action/todolist";
import AnimationLoading from "../UI/AnimationLoading";
const FormEdit = (props) => {
  // define all module
  const dispatch=useDispatch();
  
  const [isLoading,setIsLoading]=useState(false);
   // added ref for input
   const inputElement = useRef();
   const inputDesc=useRef();

   // hanlder submit
   const handlerSubmit = (e) => {
     e.preventDefault();
    // newData
    const newData={
      title:inputElement.current.value,
      description:inputDesc.current.value,
      userId:props.data.userId
    }
    setIsLoading(true)
    dispatch(updateTodo(newData,props.data,setIsLoading))
    props.onCloseModal(false);
  };
  return (
    <>
    {isLoading && <AnimationLoading/>}
    <MyModal isOpen={props.openModal} onCloseModal={props.onCloseModal}>
      <div className="grid grid-cols-[95%,5%] justify-items-center items-stretch">
        <Dialog.Title
          as="h3"
          className="text-xl pl-5 font-mainFont  font-semibold leading-6 tracking-widest text-gray-900"
        >
         EDIT TODOLIST
        </Dialog.Title>
        <button
          className="justify-self-end text-slate-500 hover:text-rose-500 transition-colors"
          onClick={props.onCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <form onSubmit={handlerSubmit}>
          <div>
            <label className="inline-block w-full font-mainFont text-md font-normal">
              Edit Activity
            </label>
            <input
              type="text"
              className="mt-2 font-mainFont text-sm w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-2 focus:border-slate-500"
              placeholder="Input Todolist..."
              ref={inputElement}
              defaultValue={props.data.title}
            />
          </div>
          <div className="mt-2">
            <label className="inline-block w-full font-mainFont text-md font-normal">
              New description
            </label>
            <textarea
              rows={4}
              cols={30}
              className="mt-2 font-mainFont text-sm w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-2 focus:border-slate-500"
              placeholder="Input description..."
              ref={inputDesc}
              defaultValue={props.data.description}
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex font-mainFont tracking-wider justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </MyModal>
    </>
  );
};

export default FormEdit;
