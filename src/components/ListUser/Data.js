import React,{useState} from "react";
import Card from "../UI/Card";
import FormEdit from "./FromEdit";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../utilites/redux/Action/todolist";
import AnimationLoading from "../UI/AnimationLoading";
const Data = (props) => {
  // define global access file
  const dispatch=useDispatch();
  // status modal 
  const [isOpens, setIsOpen] = useState(false);
  const [isLoading,setIsLoading]=useState(false);
  // handler delete btn
  const handlerDelete=e=>{
    setIsLoading(true)
    dispatch(deleteTodo(props.datas,setIsLoading));
  }
  // handler open modal
  const handlerOpenModal = (e) => setIsOpen(true);
  //   handler close modal
  const handlerCloseModal = (e) => setIsOpen(false);
  return (
    <>
    {isLoading && <AnimationLoading/>}
    <Card
      className="p-4  relative border bg-card shadow-inner text-white grid grid-cols-2 group "
    >
      <h2
        className={`data-strip font-semibold text-lg`}
      >
        {props.datas.title}
      </h2>
      <div className="absolute -right-2 -top-2.5 text-black flex gap-4">
        <button onClick={handlerOpenModal}
          className={`w-7 h-7 p-1.5 flex justify-center items-center bg-blue-400 hover:bg-blue-500 transition-colors duration-200 text-white rounded-full`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </button>
        <FormEdit openModal={isOpens} onCloseModal={handlerCloseModal} data={props.datas} />
        {/* deletebtn */}
        <button onClick={handlerDelete} className="w-7 h-7 flex justify-center items-center bg-rose-400 hover:bg-rose-500 transition-colors duration-200 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
      <p
        className={`data-strip  text-sm text-paragraf font-normal mt-2 pb-4 col-span-2`}>
       {props.datas.description}
      </p>
    </Card>
    </>
  );
};

export default Data;
