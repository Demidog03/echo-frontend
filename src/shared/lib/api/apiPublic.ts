import axios from "axios";
import { toast } from "react-toastify";

const apiPublic = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})

apiPublic.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        toast.error(error?.response?.data?.error || 'Server error')
        return Promise.reject(error);
    }
)

export default apiPublic
