import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
      baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
     const navigate = useNavigate()
     const {logOut} = useAuth()
     //interceptor request
     axiosSecure.interceptors.request.use(function(config){
          const token = localStorage.getItem('access_token')
          console.log('request stop by interceptors', token)
          config.headers.authorization = `Bearer ${token}`
          return config
     }, function(error){
          return Promise.reject(error)
     })
     //interceptors 401 and 403 status
     axiosSecure.interceptors.response.use(function(response){
          return response
     }, async(error)=>{
          const status = error.response.status
          if (status === 401 || status === 403) {
              await logOut()
               navigate('/login')
          }
          return Promise.reject(error)
     })
     return axiosSecure;
};

export default useAxiosSecure;