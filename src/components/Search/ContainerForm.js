import React, { useState } from "react";
import FormAddNew from "./FormAddNew";
import FormSearch from "./FormSearch";
import TitleSearch from "./TitleSearch";

const ContainerData = (props) => {
  // status modal 
  const [isOpens, setIsOpen] = useState(false);
  // handler open modal
  const handlerOpenModal = (e) => setIsOpen(true);
  //   handler close modal
  const handlerCloseModal = (e) => setIsOpen(false);
  return (
    <div className="mt-4 grid grid-cols-[90%,10%] justify-items-end items-start">
     <TitleSearch/>
      <button
        type="button"
        onClick={handlerOpenModal}
        className=" rounded-full bg-heading  p-3 text-white hover:bg-opacity-80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="col-span-2  w-full mt-5">
      <h1 className="text-center text-4xl text-heading   ">
       TodoList
      </h1>
      </div>
      <FormAddNew openModal={isOpens} onCloseModal={handlerCloseModal} />
      <FormSearch onSearchCont={props.onSearchApp}/>
    </div>
  );
};
export default ContainerData;
