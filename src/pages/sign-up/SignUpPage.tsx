import { Container, Stack, Typography } from '@mui/material'
import classes from './SignUpPage.module.scss'
import SignUpForm from '../../modules/auth/ui/SignUpForm'

function SignUpPage() {
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
                <Typography variant="h1">Sign-up</Typography>
                <SignUpForm/>
            </Stack>
        </Container>
    )
}

export default SignUpPage
