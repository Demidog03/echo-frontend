import { Container, Stack, Typography } from "@mui/material"
import classes from './SignInPage.module.scss'
import SignInForm from "../../modules/auth/ui/SignInForm"

function SignInPage() {
    return (
        <Container className={classes.container} maxWidth="sm">
            <Stack
                direction="column"
                spacing={1}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1">Sign-in</Typography>
                <SignInForm/>
            </Stack>
        </Container>
    )
}

export default SignInPage
