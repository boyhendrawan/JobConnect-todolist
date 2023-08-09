
import { useDispatch,useSelector} from "react-redux";
import { logout } from "../../utilites/redux/Action/login";
import { useNavigate } from "react-router-dom";
const TitleSearch = (e) => {
  // find global data
 const dispatch=useDispatch();
 const navigate = useNavigate();
//  getData
 const {dataUser}=useSelector(e=>e.Auth);
//  handler button
 const handlerLogout=(e)=>{
  e.preventDefault();
  dispatch(logout(navigate));

 }
  return (
    <div className="justify-self-start">
      <div>
      <h1 className="text-left text-4xl text-heading   ">
        Hello, <span className="font-semibold tracking-wide">{dataUser.username}</span> 
      </h1>
        <button onClick={handlerLogout} className="bg-rose-600 px-2 py-1 text-white border-none rounded-md mt-2 text-xs md:text-sm" >Logout</button>
      </div>
      
      <p className="pl-2 mt-4 text-xs font-light text-slate-500">
        Greeting From <span className="tracking-widest uppercase ">Hesoyam</span>
      </p>
      <p className="pl-2 mt-1 text-xs font-light text-slate-500">
        I Hope your day run as schedule to get better day
      </p>
     
    </div>
  );
};

export default TitleSearch;
