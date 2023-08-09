import React, { Fragment, useState } from "react";
import  UtilsForm from "../UI/UtilsForm"
 const FormSearch = (props) => {
  // add state for handle input value
  const [currentVal, setVal] = useState("");
  const changeInput = (e) => {
    setVal(e.target.value);
    props.onSearchCont(e.target.value);
  };
  return (
    <Fragment>
      <form className="col-span-2  w-full mt-8">
        <UtilsForm
          value={currentVal}
          type="text"
          placeholder="Search Your Todo..."
          id="search"
          onChange={changeInput}
        />
      </form>
    </Fragment>
  );
};

export default FormSearch;
