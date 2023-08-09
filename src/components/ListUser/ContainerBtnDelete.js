import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Modal from "../../UI/Modal";
const ContainerBtnOrder = (props) => {
  // status modal
  const [isOpens, setIsOpen] = useState(false);
  // for check delete all or not
  const [kindDelete, setKindDelete] = useState();

  // check much data done
  const todoDone = props.allDatas.filter((e) => e.complete);

  // handler open modal
  const handlerOpenModalDA = (e) => {
    setIsOpen(true);
    setKindDelete("all");
  };
  const handlerOpenModalDD = (e) => {
    setIsOpen(true);
    setKindDelete("done");
  };
  //   handler close modal
  const handlerCloseModal = (e) => {
    setKindDelete();
    setIsOpen(false);
  };
  // handler agree delete
  const handlerBtnAgree = (e) => {
    // forward to the parent
    props.onDeleteAllCon(kindDelete);
    // reset
    handlerCloseModal();
  };
  return (
    <div className="flex justify-center gap-4 my-4">
      {props.allDatas.length !== 0 && (
        <button
          onClick={handlerOpenModalDA}
          className="p-2 bg-rose-400 hover:bg-rose-500 text-white font-normal text-xs rounded-md "
        >
          Delete All
        </button>
      )}
      {todoDone.length !== 0 &&<button
        onClick={handlerOpenModalDD}
        className="p-2 bg-rose-400 hover:bg-rose-500 text-white font-normal text-xs rounded-md "
      >
        Delete All Done
      </button>

      }

      

      <Modal isOpen={isOpens} onCloseModal={handlerCloseModal}>
        <div className="grid grid-cols-[95%,5%] justify-items-center items-stretch">
          <Dialog.Title
            as="h3"
            className="text-xl pl-5 font-mainFont justify-self-start  font-semibold leading-6 tracking-wide text-gray-900"
          >
            Are You Sure To Delete
          </Dialog.Title>
          <button
            className="justify-self-end text-slate-500 hover:text-rose-500 transition-colors"
            onClick={handlerCloseModal}
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
        <div className="mt-4 pl-5">
          <h1 className="font-mainFont text-rose-600 font-medium text-medium">
            It will be delete {kindDelete} Todolist you have.
          </h1>

          <button
            onClick={handlerBtnAgree}
            type="button"
            className="inline-flex mt-5 font-mainFont tracking-wider justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
          >
            Got it, Delete {kindDelete}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContainerBtnOrder;
