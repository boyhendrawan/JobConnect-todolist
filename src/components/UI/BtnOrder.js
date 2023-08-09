const BtnOrder = (props) => {
  const customBtn = `${props.className} px-2 py-1  flex  border-black  justify-center items-center gap-x-2`;

  return (
    <div className={customBtn}>
      <input type="radio" onChange={props.onChange} checked={props.value === props.checkedData} name="selected" onClick={props.onClick} className="cursor-pointer peer/published" value={props.value} />
      <label
        htmlFor="published"
        className="peer-checked/published:text-sky-500"
      >
        {props.children}
      </label>
    </div>
  );
};
export default BtnOrder;
