import { createHashRouter } from 'react-router'
import {
    AboutPage,
    ArticlePage, CreatePostPage,
    EditProfilePage,
    FaqPage,
    HomePage,
    NotFoundPage,
    PostsPage,
    SignInPage,
    SignUpPage
} from './lazyPages'
import AuthPageGuard from "./modules/guards/ui/AuthPageGuard";
import PublicPageGuard from "./modules/guards/ui/PublicPageGuard";

const router = createHashRouter([
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
    },
    {
        path: '/article',
        element: <AuthPageGuard><ArticlePage/></AuthPageGuard>
    },
    {
        path: '/posts',
        element: <AuthPageGuard><PostsPage/></AuthPageGuard>
    },
    {
        path: '/faq',
        element: <AuthPageGuard><FaqPage/></AuthPageGuard>
    },
    {
        path: '/about',
        element: <AuthPageGuard><AboutPage/></AuthPageGuard>
    },
    {
        path: '/create-post',
        element: <AuthPageGuard><CreatePostPage/></AuthPageGuard>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

export default router
