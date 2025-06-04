import { useQuery } from '@tanstack/react-query'
import { getProfileApi } from '../api/profile.api'
import { useAuthStore } from '../../auth/store/auth.store'

export default function useGetProfileQuery() {
    const { token } = useAuthStore()

    return useQuery({
        queryKey: ['profile'],
        queryFn: getProfileApi,
        retry: 1,
        refetchOnWindowFocus: false,
        enabled: Boolean(token)
    })
}