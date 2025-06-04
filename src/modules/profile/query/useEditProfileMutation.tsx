import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editProfileApi } from '../api/profile.api'

export default function useEditProfileMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: editProfileApi,
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })
}