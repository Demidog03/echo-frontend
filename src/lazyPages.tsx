import { lazy } from "react";
import Loadable from "./shared/lib/hoc/Loadable";

export const HomePage = Loadable(lazy(async () => await import('./pages/HomePage')))
export const SignInPage = Loadable(lazy(async () => await import('./pages/sign-in/SignInPage')))
export const SignUpPage = Loadable(lazy(async () => await import('./pages/sign-up/SignUpPage')))
export const EditProfilePage = Loadable(lazy(async () => await import('./pages/EditProfilePage')))
export const ArticlePage = Loadable(lazy(async () => await import('./pages/article/ArticlePage')))
export const PostsPage = Loadable(lazy(async () => await import('./pages/posts/PostsPage')))
export const NotFoundPage = Loadable(lazy(async () => await import('./pages/not-found/NotFoundPage')))
export const FaqPage = Loadable(lazy(async () => await import('./pages/faq/FaqPage')))
export const AboutPage = Loadable(lazy(async () => await import('./pages/about/AboutPage')))
export const CreatePostPage = Loadable(lazy(async () => await import('./pages/create-post/CreatePostPage')))
