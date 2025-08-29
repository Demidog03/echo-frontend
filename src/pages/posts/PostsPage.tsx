import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Stack,
    Typography,
    Avatar,
    TextField,
    MenuItem,
    Pagination,
    Skeleton,
} from '@mui/material';
import { Link, useSearchParams } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import MainLayout from '../../shared/ui/MainLayout.tsx';

const TAGS = ['All', 'Technology', 'Travel', 'Business', 'Lifestyle', 'Economy', 'Sports'] as const;
const AUTHORS = ['Tracey Wilson', 'Jason Francisco', 'Elizabeth Slavin', 'Ernie Smith', 'Eric Smith', 'Karen Miles', 'John Doe'];
const IMAGES = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
];

type Post = { id: number; title: string; author: string; date: string; tag: (typeof TAGS)[number]; image: string };

const ALL_POSTS: Post[] = Array.from({ length: 200 }).map((_, i) => {
    const tag = TAGS[(i % (TAGS.length - 1)) + 1];
    const author = AUTHORS[i % AUTHORS.length];
    const image = IMAGES[i % IMAGES.length];
    const date = new Date(2022, i % 12, (i % 28) + 1).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return { id: i + 1, title: `Post #${i + 1}: Insights about ${tag}`, author, date, tag, image };
});

const PER_PAGE = 9;

export default function PostsPage() {
    const [params, setParams] = useSearchParams();
    const q = params.get('q') ?? '';
    const tag = (params.get('tag') ?? 'All') as (typeof TAGS)[number];
    const page = Math.max(1, Number(params.get('page') ?? '1'));

    const [loading, setLoading] = useState(true);

    // запуск загрузки при смене параметров
    useEffect(() => {
        setLoading(true);
        const t = setTimeout(() => setLoading(false), 500); // эмуляция задержки API
        return () => clearTimeout(t);
    }, [tag, page]);

    const filtered = useMemo(() => {
        let res = ALL_POSTS;
        if (tag !== 'All') res = res.filter((p) => p.tag === tag);
        if (q.trim()) {
            const s = q.trim().toLowerCase();
            res = res.filter((p) => p.title.toLowerCase().includes(s) || p.author.toLowerCase().includes(s));
        }
        return res;
    }, [q, tag]);

    const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const start = (page - 1) * PER_PAGE;
    const current = filtered.slice(start, start + PER_PAGE);

    const setQuery = (next: Record<string, string | number | undefined>) => {
        const nextParams = new URLSearchParams(params);
        Object.entries(next).forEach(([k, v]) => {
            if (v === undefined || v === '' || v === 'All') nextParams.delete(k);
            else nextParams.set(k, String(v));
        });
        if (next.q !== undefined || next.tag !== undefined) nextParams.set('page', '1');
        setParams(nextParams, { replace: true });
    };

    return (
        <MainLayout>
            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="stretch" sx={{ mb: 3 }}>
                    {loading ? (
                        <Skeleton variant="text" width={160} height={36} />
                    ) : (
                        <Typography variant="h5" fontWeight={700} sx={{ flex: 1 }}>
                            All Posts
                        </Typography>
                    )}
                    {loading ? (
                        <Stack direction="row" spacing={2} sx={{ width: { xs: '100%', sm: 520 } }}>
                            <Skeleton variant="rounded" height={40} sx={{ flex: 1 }} />
                            <Skeleton variant="rounded" width={160} height={40} />
                        </Stack>
                    ) : (
                        <>
                            <TextField
                                value={q}
                                onChange={(e) => setQuery({ q: e.target.value })}
                                placeholder="Search by title or author…"
                                size="small"
                                fullWidth
                                sx={{ maxWidth: 360 }}
                            />
                            <TextField
                                select
                                label="Category"
                                size="small"
                                value={tag}
                                onChange={(e) => setQuery({ tag: e.target.value })}
                                sx={{ minWidth: 160 }}
                            >
                                {TAGS.map((t) => (
                                    <MenuItem key={t} value={t}>
                                        {t}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </>
                    )}
                </Stack>

                {/* Сетка карточек */}
                <Box
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    }}
                >
                    {loading
                        ? Array.from({ length: PER_PAGE }).map((_, i) => (
                            <Card key={`sk-${i}`} sx={{ borderRadius: 2, p: 2 }}>
                                <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2, mb: 2 }} />
                                <Skeleton width="30%" />
                                <Skeleton width="90%" />
                                <Skeleton width="65%" />
                            </Card>
                        ))
                        : current.map((p) => (
                            <Card key={p.id} sx={{ borderRadius: 2 }}>
                                <CardActionArea component={Link} to={`/article`}>
                                    <CardMedia component="img" image={p.image} alt={p.title} sx={{ height: 180, objectFit: 'cover' }} />
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

                {/* Пагинация */}
                <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
                    {loading ? (
                        <Skeleton variant="rounded" width={300} height={40} />
                    ) : (
                        <Pagination
                            page={Math.min(page, pageCount)}
                            count={pageCount}
                            color="primary"
                            onChange={(_, p) => setQuery({ page: p })}
                        />
                    )}
                </Stack>
            </Container>
        </MainLayout>
    );
}
