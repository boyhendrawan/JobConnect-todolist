import React from "react";
import Data from "./Data";

const ContainerData = (props) => {
  const userSearch = props.searchVal.toUpperCase();
  const dataSearch=props.allDatas.filter((e) => e.title.toUpperCase().includes(userSearch));
  return (
    <div className="mt-5">
      <div className="flex gap-y-4 flex-col">
        {
          //   handle with && Search For falsy
          dataSearch.length === 0 && <p className="text-center mt-4 text-lg font-semibold">Opps Data Not Available </p>
        }
        {dataSearch.length > 0 &&
          dataSearch.map((e) => <Data onEditDataCon={props.onEditDataApp} onContainerData={props.onUpdateCheckBox} onContainerDelete={props.onAppDelete} datas={e}  key={e.id} id={e.id}/>
          )}
      </div>
    </div>
  );
};

export default ContainerData;
