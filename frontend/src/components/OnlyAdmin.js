import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OnlyAdmin = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default OnlyAdmin;
