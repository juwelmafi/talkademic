import React from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading/Loading";
import useUserRole from "../hooks/useUserRole";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (authLoading || roleLoading) {
    return <Loading />;
  }

  if (!user || role !== "admin") {
    return (
      <Navigate
        to="/forbidden-access"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default AdminRoute;
