import MainLayout from '../shared/ui/MainLayout';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Stack,
    Typography,
    Avatar,
    Skeleton,
} from '@mui/material';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const heroImage =
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop';
const postImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
];

const posts = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: ['Tracey Wilson', 'Jason Francisco', 'Elizabeth Slavin', 'Ernie Smith', 'Eric Smith', 'Tracey Wilson'][i],
    date: 'August 20, 2022',
    image: postImages[i],
    tag: 'Technology',
}));

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    // эмуляция загрузки данных
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // 2 сек задержки
        return () => clearTimeout(timer);
    }, []);

    return (
        <MainLayout>
            <>
                {/* HERO */}
                <Container maxWidth="xl" sx={{ mb: 6 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: 3,
                            overflow: 'hidden',
                            height: { xs: 260, sm: 360, md: 420 },
                            boxShadow: 2,
                        }}
                    >
                        {loading ? (
                            <Skeleton variant="rectangular" width="100%" height="100%" />
                        ) : (
                            <CardMedia component="img" height="100%" image={heroImage} alt="hero" sx={{ objectFit: 'cover' }} />
                        )}

                        {!loading && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: 16, sm: 24, md: 32 },
                                    bottom: { xs: 16, sm: 24, md: 32 },
                                    maxWidth: { xs: '92%', sm: 520 },
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            >
                                <CardContent>
                                    <Chip label="Technology" size="small" color="primary" sx={{ mb: 1 }} />
                                    <Typography variant="h5" fontWeight={700} gutterBottom>
                                        The Impact of Technology on the Workplace: How Technology is Changing
                                    </Typography>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <Avatar sx={{ width: 24, height: 24 }}>J</Avatar>
                                        <Typography variant="body2">Jason Francisco</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            August 20, 2022
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Box>
                        )}
                    </Box>
                </Container>

                {/* Latest Post */}
                <Container maxWidth="xl" sx={{ mb: 8 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                        Latest Post
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gap: 3,
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        }}
                    >
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <Card key={i} sx={{ borderRadius: 2, p: 2 }}>
                                    <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2, mb: 2 }} />
                                    <Skeleton width="60%" />
                                    <Skeleton width="40%" />
                                    <Skeleton width="80%" />
                                </Card>
                            ))
                            : posts.map((p) => (
                                <Card key={p.id} sx={{ borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea component={Link} to={`/article`}>
                                        <CardMedia
                                            component="img"
                                            image={p.image}
                                            alt={p.title}
                                            sx={{ height: 180, width: '100%', objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <Chip label={p.tag} size="small" color="primary" sx={{ mb: 1 }} />
                                            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
                                                {p.title}
                                            </Typography>
                                            <Stack direction="row" spacing={1.5} alignItems="center">
                                                <Avatar sx={{ width: 22, height: 22 }}>{p.author[0]}</Avatar>
                                                <Typography variant="body2">{p.author}</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {p.date}
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                    </Box>

                    {!loading && (
                        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
                            <Button component={Link} to="/posts" variant="outlined">
                                View all posts
                            </Button>
                        </Stack>
                    )}
                </Container>
            </>
        </MainLayout>
    );
}
