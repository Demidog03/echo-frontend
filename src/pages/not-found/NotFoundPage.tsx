import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <Container
            maxWidth="md"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Stack spacing={3} alignItems="center">
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                        fontWeight: 700,
                        lineHeight: 1,
                        color: "primary.main",
                    }}
                >
                    404
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                    Oops! Page not found
                </Typography>
                <Typography variant="body1" color="text.secondary" maxWidth={480}>
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </Typography>
                <Box>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ borderRadius: 2 }}
                    >
                        Back to Home
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
}
