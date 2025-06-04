import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../../../modules/auth/store/auth.store";

const apiPrivate = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})

apiPrivate.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token

    if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

apiPrivate.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        toast.error(error?.response?.data?.error || 'Server error')
        return Promise.reject(error);
    }
)

export default apiPrivate
