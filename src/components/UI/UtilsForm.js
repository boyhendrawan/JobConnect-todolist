const UtilsForm = (props) => {
  return (
    <div className={`flex items-center px-4 py-2 h-10 border-2 border-slate-300  rounded-full w-full gap-x-4 focus-within:border-heading transition-all duration-300 ${props.className}`}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className={`w-[100%] focus:outline-none peer placeholder:text-sm order-2`}
        onChange={props.onChange}
      />
      <button className="w-7 h-7 order-1 bg-slate-300 text-white rounded-full p-1 flex justify-center items-center transition-colors duration-300 peer-focus-within:bg-heading ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      
    </div>
  );
};

export default UtilsForm;
