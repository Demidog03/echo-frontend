import MainLayout from '../../shared/ui/MainLayout';
import {
    Box,
    Button,
    Chip,
    Container,
    IconButton,
    Stack,
    TextField,
    Typography,
    MenuItem,
    Paper,
    Snackbar,
    Alert,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
    title: string;
    category: string;
    tags: string;         // через запятую
    content: string;
    cover?: FileList;
};

const CATEGORIES = ['Technology', 'Travel', 'Business', 'Lifestyle', 'Economy', 'Sports'];

const schema = yup.object({
    title: yup.string().trim().min(6, 'Минимум 6 символов').max(140, 'Максимум 140 символов').required('Название обязательно'),
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    /*@ts-expect-error*/
    category: yup.string().oneOf(CATEGORIES as const, 'Выберите категорию').required('Категория обязательна'),
    tags: yup.string().max(120, 'Слишком много тегов').optional(),
    content: yup.string().trim().min(40, 'Текст должен быть осмысленным (40+ символов)').required('Текст обязателен'),
    cover: yup
        .mixed<FileList>()
        .test('file-size', 'Файл слишком большой (до 5MB)', (files) => !files?.[0] || files[0].size <= 5 * 1024 * 1024)
        .test('file-type', 'Поддерживаются JPG/PNG', (files) => {
            if (!files?.[0]) return true;
            return ['image/jpeg', 'image/png'].includes(files[0].type);
        }),
});

export default function CreatePostPage() {
    const {
        control,
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<FormValues>({
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        /*@ts-expect-error*/
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: { title: '', category: '', tags: '', content: '' },
    });

    const [toast, setToast] = useState<{ open: boolean; msg: string; sev: 'success' | 'error' }>({
        open: false,
        msg: '',
        sev: 'success',
    });

    // превью для обложки
    const coverFile = watch('cover')?.[0];
    const coverUrl = useMemo(() => (coverFile ? URL.createObjectURL(coverFile) : ''), [coverFile]);
    useEffect(() => () => { if (coverUrl) URL.revokeObjectURL(coverUrl); }, [coverUrl]);

    const fileRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = async (values: FormValues) => {
        // имитация API
        await new Promise((r) => setTimeout(r, 800));

        // соберём полезные данные
        const payload = {
            title: values.title.trim(),
            category: values.category,
            tags: values.tags
                ?.split(',')
                .map((t) => t.trim())
                .filter(Boolean),
            content: values.content.trim(),
            hasCover: Boolean(values.cover?.[0]),
        };

        console.log('CREATE_POST_PAYLOAD', payload);
        setToast({ open: true, msg: 'Пост создан', sev: 'success' });
        reset();
        if (fileRef.current) fileRef.current.value = '';
    };

    return (
        <MainLayout>
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                    Create a Post
                </Typography>

                <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2.5}>
                        {/* Title */}
                        <TextField
                            label="Title"
                            placeholder="Enter a catchy title…"
                            {...register('title')}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                            fullWidth
                        />

                        {/* Category + Tags */}
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField
                                select
                                label="Category"
                                fullWidth
                                defaultValue=""
                                {...register('category')}
                                error={!!errors.category}
                                helperText={errors.category?.message}
                            >
                                {CATEGORIES.map((c) => (
                                    <MenuItem key={c} value={c}>
                                        {c}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                label="Tags"
                                placeholder="comma,separated,tags"
                                fullWidth
                                {...register('tags')}
                                error={!!errors.tags}
                                helperText={errors.tags?.message || 'Use comma to separate tags'}
                            />
                        </Stack>

                        {/* Cover upload */}
                        <Box
                            sx={{
                                display: 'grid',
                                gap: 1,
                                gridTemplateColumns: { xs: '1fr', sm: coverUrl ? '1fr 160px' : '1fr' },
                                alignItems: 'start',
                            }}
                        >
                            <Controller
                                control={control}
                                name="cover"
                                render={({ field }) => (
                                    <Box
                                        sx={{
                                            border: (theme) => `1px dashed ${theme.palette.divider}`,
                                            borderRadius: 2,
                                            p: 2,
                                            bgcolor: 'background.paper',
                                        }}
                                    >
                                        <Stack spacing={1}>
                                            <Typography variant="subtitle2">Cover image (optional)</Typography>
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                accept="image/png,image/jpeg"
                                                onChange={(e) => field.onChange(e.target.files as FileList)}
                                            />
                                            {errors.cover && (
                                                <Typography variant="caption" color="error">
                                                    {errors.cover.message as string}
                                                </Typography>
                                            )}
                                            {coverUrl && (
                                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                    <Chip size="small" label={coverFile?.name} />
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => {
                                                            field.onChange(undefined);
                                                            if (fileRef.current) fileRef.current.value = '';
                                                        }}
                                                    >
                                                        <DeleteOutlineIcon fontSize="small" />
                                                    </IconButton>
                                                </Stack>
                                            )}
                                        </Stack>
                                    </Box>
                                )}
                            />

                            {coverUrl && (
                                <Box
                                    component="img"
                                    src={coverUrl}
                                    alt="Cover preview"
                                    sx={{
                                        width: { xs: '100%', sm: 160 },
                                        height: 120,
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        border: (t) => `1px solid ${t.palette.divider}`,
                                    }}
                                />
                            )}
                        </Box>

                        {/* Content */}
                        <TextField
                            label="Content"
                            placeholder="Write your story…"
                            {...register('content')}
                            error={!!errors.content}
                            helperText={errors.content?.message}
                            fullWidth
                            multiline
                            minRows={8}
                        />

                        {/* Actions */}
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button
                                type="button"
                                variant="outlined"
                                onClick={() => {
                                    reset();
                                    if (fileRef.current) fileRef.current.value = '';
                                }}
                            >
                                Clear
                            </Button>
                            <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
                                {isSubmitting ? 'Publishing…' : 'Publish'}
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>

                {/* Simple Preview (optional) */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        Live preview (draft)
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                        <Typography variant="h6">{watch('title') || '—'}</Typography>
                        <Stack direction="row" spacing={1} sx={{ my: 1 }}>
                            {watch('category') && <Chip size="small" color="primary" label={watch('category')} />}
                            {watch('tags')
                                ?.split(',')
                                .map((t) => t.trim())
                                .filter(Boolean)
                                .slice(0, 5)
                                .map((t) => (
                                    <Chip key={t} size="small" variant="outlined" label={t} />
                                ))}
                        </Stack>
                        {coverUrl && (
                            <Box
                                component="img"
                                src={coverUrl}
                                alt="Preview cover"
                                sx={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 2, mb: 1 }}
                            />
                        )}
                        <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
                            {watch('content') || '—'}
                        </Typography>
                    </Paper>
                </Box>

                <Snackbar
                    open={toast.open}
                    autoHideDuration={2500}
                    onClose={() => setToast((s) => ({ ...s, open: false }))}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert severity={toast.sev} variant="filled" onClose={() => setToast((s) => ({ ...s, open: false }))}>
                        {toast.msg}
                    </Alert>
                </Snackbar>
            </Container>
        </MainLayout>
    );
}
