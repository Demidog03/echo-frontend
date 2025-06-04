import { JSX, useEffect } from "react"
import useGetProfileQuery from "../../profile/query/useGetProfileQuery"
import { useLocation, useNavigate } from "react-router"
import { useAuthStore } from "../../auth/store/auth.store"

interface AuthPageGuardProps {
    children: JSX.Element
}

function AuthPageGuard({ children }: AuthPageGuardProps) {
    const { isSuccess } = useGetProfileQuery()
    const { token } = useAuthStore()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(!isSuccess || !token) {
            navigate('/sign-in', { state: { from: location.pathname } })
        }
    }, [isSuccess, token])

    if(!isSuccess || !token) {
        return null
    }

    return children
}

export default AuthPageGuard

{/* <AuthPageGuard>
    <h1></h1> -> children
</AuthPageGuard> */}
