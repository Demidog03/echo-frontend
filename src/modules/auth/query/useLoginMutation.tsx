import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginApi } from '../api/auth.api'
import { useAuthStore } from '../store/auth.store'

export default function useLoginMutation() {
    const { setToken } = useAuthStore()
    const query = useQueryClient()

    return useMutation({
        mutationFn: loginApi,
        onSuccess: (response) => {
            if (response?.data?.accessToken) {
                setToken(response.data.accessToken)
                query.invalidateQueries({ queryKey: ['profile'] })
            }
        }
    })
}