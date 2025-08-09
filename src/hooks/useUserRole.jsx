import { useQuery } from "@tanstack/react-query";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useContext } from "react";



const useUserRole = () => {
  const { user, loading: authLoading } = useContext(AuthContext);

  const {
    data: role = "user nai",
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`https://talkademic-server.vercel.app/users/${user.email}/role`);
      return res.data.role;
    },
  });

  return { role, roleLoading: authLoading || roleLoading, refetch };
};

export default useUserRole;