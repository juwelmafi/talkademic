// import axios from "axios";
// import React, { useContext } from "react";
// import { AuthContext, getToken } from "../provider/AuthProvider";

// const axiosInstance = axios.create({
//   baseURL: "https://talkademic-server.vercel.app",
// });

// const useAxiosSecure = () => {
//   // const { user, token } = useContext(AuthContext);
//   const token = getToken();
//   console.log(token)

//   if(token){
//     axiosInstance.interceptors.request.use((config) => {
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   });
//   }

//   return axiosInstance;
// };

// export default useAxiosSecure;
