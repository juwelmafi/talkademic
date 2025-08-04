import { useQuery } from "@tanstack/react-query";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";
import axios from "axios";



const useUserRole = () => {
  const { user, loading: authLoading } = AuthProvider(AuthContext);

  const {
    data: role = "user",
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`/users/${user.email}/role`);
      return res.data.role;
    },
  });

  return { role, roleLoading: authLoading || roleLoading, refetch };
};

export default useUserRole;