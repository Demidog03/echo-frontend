import { createBrowserRouter } from "react-router";
import { EditProfilePage, HomePage, SignInPage, SignUpPage } from "./lazyPages";
import AuthPageGuard from "./modules/guards/ui/AuthPageGuard";
import PublicPageGuard from "./modules/guards/ui/PublicPageGuard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthPageGuard><HomePage/></AuthPageGuard>
    },
    {
        path: '/sign-in',
        element: <PublicPageGuard><SignInPage/></PublicPageGuard>
    },
    {
        path: 'sign-up',
        element: <PublicPageGuard><SignUpPage/></PublicPageGuard>
    },
    {
        path: '/profile',
        element: <AuthPageGuard><EditProfilePage/></AuthPageGuard>
    }
])

export default router