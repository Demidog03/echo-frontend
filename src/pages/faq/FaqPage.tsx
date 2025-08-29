import MainLayout from '../../shared/ui/MainLayout.tsx'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Container,
    Grid,
    Stack,
    TextField,
    Typography,
    Button,
    Paper,
    useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArticleIcon from '@mui/icons-material/Article';
import { useMemo, useState } from 'react';

type FAQ = {
    q: string;
    a: string;
    cat: 'Account' | 'Content' | 'UI/UX' | 'Security' | 'Other';
};

const CATS: FAQ['cat'][] = ['Account', 'Content', 'UI/UX', 'Security', 'Other'];

const FAQS: FAQ[] = [
    { q: 'Как сменить пароль?', cat: 'Account', a: 'Профиль → Edit profile → Change password. Пароль должен содержать 8+ символов, цифру и символ.' },
    { q: 'Как включить тёмную тему?', cat: 'UI/UX', a: 'В шапке нажмите на иконку темы (луна/солнце). Выбор сохраняется в браузере.' },
    { q: 'Как создать пост?', cat: 'Content', a: 'Перейдите в “Create” и заполните заголовок, текст и категорию. Черновики сохраняются автоматически.' },
    { q: 'Почему не видно изображение в посте?', cat: 'Content', a: 'Проверьте формат (JPEG/PNG) и размер (до 5 МБ). При медленном интернете используем ленивую загрузку.' },
    { q: 'Двухфакторная аутентификация', cat: 'Security', a: 'Включите 2FA в настройках профиля. Отсканируйте QR-код в приложении-аутентикаторе и введите код.' },
    { q: 'Где посмотреть мои закладки?', cat: 'UI/UX', a: 'Раздел “Saved” в профиле. Там же можно удалить закладки.' },
    { q: 'Как сменить email?', cat: 'Account', a: 'В профиле измените email и подтвердите через письмо. Старый адрес будет активен до подтверждения.' },
    { q: 'Жалоба на пост или пользователя', cat: 'Other', a: 'Откройте меню ⋯ на карточке и выберите “Report”. Команда модерации рассмотрит обращение.' },
];

export default function FaqPage() {
    const theme = useTheme();
    const [q, setQ] = useState('');
    const [activeCat, setActiveCat] = useState<FAQ['cat'] | 'All'>('All');
    const [expanded, setExpanded] = useState<number | false>(0);

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        return FAQS.filter(item => {
            const byCat = activeCat === 'All' || item.cat === activeCat;
            const byText = !s || item.q.toLowerCase().includes(s) || item.a.toLowerCase().includes(s);
            return byCat && byText;
        });
    }, [q, activeCat]);

    const handleCat = (cat: FAQ['cat'] | 'All') => {
        setActiveCat(prev => (prev === cat ? 'All' : cat));
    };

    return (
        <MainLayout>
            <Container
                maxWidth="lg"
                sx={{
                    py: 4,
                    // предотвращаем «рывок» макета при появлении вертикальной полосы прокрутки
                    scrollbarGutter: 'stable both-edges',
                }}
            >
                {/* Header */}
                <Stack spacing={1} alignItems="center" sx={{ textAlign: 'center', mb: 3 }}>
                    <HelpOutlineIcon fontSize="large" />
                    <Typography variant="h4" fontWeight={700}>Help & FAQ</Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth={700}>
                        Нашли баг или ищете настройку? Попробуйте поиск или выберите категорию.
                    </Typography>
                </Stack>

                {/* Поиск + категории */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    alignItems={{ xs: 'stretch', md: 'center' }}
                    sx={{ mb: 3 }}
                >
                    <TextField
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Поиск по вопросам и ответам…"
                        size="small"
                        fullWidth
                    />
                </Stack>

                {/* Хор. скролл для чипов без переносов */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        p: 0.5,
                        borderRadius: 1,
                        marginBottom: '20px',
                        // убираем скроллбар в WebKit, остаётся нативный в остальных
                        '&::-webkit-scrollbar': { height: 6 },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: theme.palette.action.hover,
                            borderRadius: 999,
                        },
                    }}
                >
                    <Chip
                        label="All"
                        onClick={() => handleCat('All')}
                        color={activeCat === 'All' ? 'primary' : 'default'}
                        variant={activeCat === 'All' ? 'filled' : 'outlined'}
                        clickable
                    />
                    {CATS.map(c => (
                        <Chip
                            key={c}
                            label={c}
                            onClick={() => handleCat(c)}
                            color={activeCat === c ? 'primary' : 'default'}
                            variant={activeCat === c ? 'filled' : 'outlined'}
                            clickable
                        />
                    ))}
                </Box>

                <Grid container spacing={3}>
                    {/* Левая колонка — FAQ */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item xs={12} md={8}>
                        {filtered.length === 0 ? (
                            <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="subtitle1" fontWeight={600}>Ничего не найдено</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Попробуйте изменить запрос или выбрать другую категорию.
                                </Typography>
                            </Paper>
                        ) : (
                            filtered.map((item, idx) => (
                                <Accordion
                                    key={idx}
                                    expanded={expanded === idx}
                                    onChange={(_, isExp) => setExpanded(isExp ? idx : false)}
                                    // аккуратная анимация, без дерганий
                                    TransitionProps={{ timeout: 220 }}
                                    disableGutters
                                    square
                                    sx={{
                                        '&:before': { display: 'none' }, // убираем тонкую линию сверху
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 2,
                                        mb: 1.5,
                                        overflow: 'hidden',
                                        backgroundColor: 'background.paper',
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{
                                            minHeight: 56,
                                            '& .MuiAccordionSummary-content': { my: 1 }, // фиксируем вертикальные отступы
                                        }}
                                    >
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                                            <ArticleIcon fontSize="small" />
                                            <Typography fontWeight={600} noWrap>
                                                {item.q}
                                            </Typography>
                                            <Chip label={item.cat} size="small" variant="outlined" sx={{ ml: 1, flexShrink: 0 }} />
                                        </Stack>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ pt: 0, color: 'text.secondary' }}>
                                        <Typography>{item.a}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        )}
                    </Grid>

                    {/* Правая колонка — быстрые ссылки / саппорт */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error*/}
                    <Grid item xs={12} md={4}>
                        <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                                Нужна помощь?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Если не нашли ответ — напишите нам. Обычно отвечаем в течение суток.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    startIcon={<SupportAgentIcon />}
                                    href="mailto:support@echo.app"
                                >
                                    Написать в саппорт
                                </Button>
                            </Stack>
                        </Paper>

                        <Paper variant="outlined" sx={{ p: 3 }}>
                            <Typography variant="subtitle1" fontWeight={700}>Советы по поиску</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Используйте ключевые слова: «пароль», «2FA», «тема», «посты».
                                Фильтруйте по категориям, чтобы сузить результаты.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography variant="body2" color="text.secondary">
                        Не нашли, что искали? Мы пополним FAQ, если вы отправите нам вопрос.
                    </Typography>
                </Box>
            </Container>
        </MainLayout>
    );
}
