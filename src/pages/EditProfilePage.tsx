import { Container, Typography } from "@mui/material"
import MainLayout from "../shared/ui/MainLayout"
import EditProfileForm from "../modules/profile/ui/EditProfileForm"

function EditProfilePage() {
    return (
        <MainLayout>
            <Container maxWidth="sm">
                <Typography variant="h1">Edit Profile</Typography>
                <EditProfileForm/>
            </Container>
        </MainLayout>
    )
}

export default EditProfilePage
