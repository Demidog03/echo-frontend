import {
    Box,
    Typography,
    Link,
    TextField,
    Button,
    Divider,
    Container,
    Grid,
    InputAdornment,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Logo from '../../../public/echo-logo-mini.png';

export default function Footer() {
    return (
        <Box component="footer" sx={{ mt: 6 }}>
            {/* 🔹 Тонкая линия сверху футера */}
            <Divider sx={{ mb: 4 }} />

            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* About */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight={700} gutterBottom>About</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </Typography>
                        <Typography variant="body2" mt={2}><strong>Email:</strong> info@jstemplate.net</Typography>
                        <Typography variant="body2"><strong>Phone:</strong> 880 123 456 789</Typography>
                    </Grid>

                    {/* Quick Link */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" gutterBottom fontWeight={700}>Quick Link</Typography>
                        {['Home', 'About', 'Blog', 'Archived', 'Author', 'Contact'].map((item) => (
                            <Link href="#" key={item} underline="none" color="text.secondary" display="block" py={0.5}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Category */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" gutterBottom fontWeight={700}>Category</Typography>
                        {['Lifestyle', 'Technology', 'Travel', 'Business', 'Economy', 'Sports'].map((item) => (
                            <Link href="#" key={item} underline="none" color="text.secondary" display="block" py={0.5}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Newsletter */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                p: 3,
                                borderRadius: 3,
                                boxShadow: 3,
                            }}
                        >
                            <Typography variant="h6" fontWeight={700} align="center" gutterBottom>
                                Weekly Newsletter
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                                Get blog articles and offers via email
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Your Email"
                                size="small"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MailOutlineIcon fontSize="small" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* Bottom section */}
                <Grid container justifyContent="space-between" alignItems="center">
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img src={Logo} alt="Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
                        <Box>
                            <Typography variant="body1"><strong>Echo</strong></Typography>
                            <Typography variant="body2" color="text.secondary">© ECHO Team 2025. All Rights Reserved.</Typography>
                        </Box>
                    </Grid>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                                <Link key={item} href="#" underline="none" color="text.secondary">
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
