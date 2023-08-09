import axios from "axios";
import { login as fLogin, setUser, setIsLoggedIn, logout as fLogout } from '../reducers/Auth';
import { toast } from "react-toastify";

export const login = (data, navigate, resetUsername) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}users?username=${data.valueUsername}`,
      { "Content-Type": "application/json" }
    );
    const { token } = response?.data[0];
    dispatch(fLogin(token)); 
    dispatch(setIsLoggedIn(true))
    // reset password and useranme
    resetUsername();
    // redirect to home, don't forget to useNavigate in the component
    navigate("/todolist");
    toast.success(`Successfully, Login`,{position:"top-right"})
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const logout = (navigate) => {
  return (dispatch) => {
    dispatch(fLogout());
    dispatch(fLogin());
    dispatch(setIsLoggedIn(false));
    navigate("/login");
    toast.success(`Successfully, Logout`,{position:"top-right"})
  }
}
export const getProfile = (setLoading) => {

  return async (dispatch, getState) => {
    try {
      const { token } = getState().Auth;

      const response = await axios.get(`${process.env.REACT_APP_API}users?token=${token}`, {
        headers: {
         "Content-Type":"application/json"
        }
      });
      dispatch(setUser(response?.data[0]));

    } catch (error) {
      // console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }
    }
    // set the loading to be false
    setLoading(false);
  }
}