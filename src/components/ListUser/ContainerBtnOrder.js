import React from "react";
import BtnOrder from "../../UI/BtnOrder";

const ContainerBtnOrder=props=>{
    const [sorting,setSorting]=React.useState("all");
    const handlerChange=e=>{
        setSorting(e.target.value);
        props.onCheckApp(e.target.value);
    };
   
return(
    <div  className="flex w-full gap-x-6 justify-center m-4 ">
       <BtnOrder onChange={handlerChange} value="all"  checkedData={sorting} className=" text-xs transition-all duration-300 ease-in-out group">All</BtnOrder>
       <BtnOrder onChange={handlerChange} value="done"  checkedData={sorting} className=" text-xs transition-all duration-300 ease-in-out group">Done</BtnOrder>
       <BtnOrder onChange={handlerChange} value="running" checkedData={sorting}  className=" text-xs transition-all duration-300 ease-in-out group">Running</BtnOrder>
    </div>
)

}

export default ContainerBtnOrder;