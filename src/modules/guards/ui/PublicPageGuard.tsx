import { JSX, useEffect } from "react"
import useGetProfileQuery from "../../profile/query/useGetProfileQuery"
import { useLocation, useNavigate } from "react-router"
import { useAuthStore } from "../../auth/store/auth.store"

interface PublicPageGuardProps {
    children: JSX.Element
}

function PublicPageGuard({ children }: PublicPageGuardProps) {
    const { isSuccess } = useGetProfileQuery()
    const { token } = useAuthStore()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(isSuccess && token) {
            navigate(location.state?.from || '/')
        }
    }, [isSuccess, token])

    if(isSuccess && token) {
        return null
    }

    return children
}

export default PublicPageGuard