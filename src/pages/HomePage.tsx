import { Link } from "react-router"
import MainLayout from "../shared/ui/MainLayout"

function HomePage() {
    return (
        <MainLayout>
            <>
                <h1>Home Page</h1>
                <Link to='/sign-in'>Go to Sign in</Link>
            </>
        </MainLayout>
    )
}

export default HomePage
