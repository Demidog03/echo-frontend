import { Box, Container, Stack, Typography, Card, CardContent } from '@mui/material';
import MainLayout from '../../shared/ui/MainLayout.tsx'

export default function AboutPage() {
    return (
        <MainLayout>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Stack spacing={4} alignItems="center">
                    {/* Title */}
                    <Typography variant="h4" fontWeight={700} align="center">
                        About <span style={{ color: '#4B6BFB' }}>ECHO</span>
                    </Typography>

                    {/* Short description */}
                    <Typography variant="body1" color="text.secondary" align="center" sx={{ maxWidth: 720 }}>
                        <strong>ECHO</strong> is a space for ideas, stories, and communication.
                        Here, users can publish articles, share thoughts, and connect with like-minded people.
                        We created ECHO so that every voice can be heard and find its resonance.
                    </Typography>

                    {/* Key principles cards */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: 3,
                            width: '100%',
                        }}
                    >
                        <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    ✍️ Publishing
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Create posts and articles on any topic — from technology and culture to personal experiences.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    💬 Communication
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Leave comments, share your impressions, and join meaningful discussions.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    🌍 Community
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We strive to build a friendly and open space where respect and support are valued.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Closing section */}
                    <Typography variant="body1" align="center" sx={{ maxWidth: 680, mt: 4 }}>
                        <strong>ECHO</strong> is not just a blog.
                        It’s a place where your thoughts find reflection and become part of a bigger story.
                    </Typography>
                </Stack>
            </Container>
        </MainLayout>
    );
}
