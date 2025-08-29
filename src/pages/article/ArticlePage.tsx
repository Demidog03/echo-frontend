import {
    Container,
    Stack,
    Typography,
    Box,
    Skeleton,
    Chip,
    IconButton,
    TextField,
    Button,
    Divider,
    Avatar,
    Paper,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import classes from './ArticlePage.module.scss';
import profileicon from './images/profileicon.svg';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import MainLayout from '../../shared/ui/MainLayout';
import { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ArticlePage() {
    const [loading, setLoading] = useState(true);
    const [likes, setLikes] = useState(12);
    const [openShare, setOpenShare] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, author: 'Alice', text: 'Great article! Learned a lot 👏' },
        { id: 2, author: 'Bob', text: 'I think traveling safely is the most important part ✈️' },
    ]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(t);
    }, []);

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        setComments((prev) => [
            ...prev,
            { id: Date.now(), author: 'You', text: newComment.trim() },
        ]);
        setNewComment('');
    };

    return (
        <MainLayout>
            <Container maxWidth="md">
                <div className={classes.container}>
                    <Stack direction="column" spacing={4} sx={{ alignItems: 'stretch' }}>
                        {/* --- тело статьи --- */}
                        {/* Категория + Заголовок + Автор */}
                        <div>
                            {loading ? (
                                <Stack spacing={1}>
                                    <Skeleton variant="rounded" width={100} height={28} />
                                    <Skeleton variant="text" height={42} sx={{ maxWidth: 680 }} />
                                    <Skeleton variant="text" height={42} sx={{ maxWidth: 520 }} />
                                    <Skeleton variant="circular" width={24} height={24} />
                                </Stack>
                            ) : (
                                <>
                                    <Chip
                                        label="Technology"
                                        size="small"
                                        color="primary"
                                        sx={{ mb: 1, fontWeight: 500 }}
                                    />
                                    <Typography className={classes.typheader1}>
                                        The Impact of Technology on the Workplace:
                                        <br />
                                        How Technology is Changing
                                    </Typography>
                                    <Box className={classes.divheader1} sx={{ color: 'text.secondary' }}>
                                        <img src={profileicon} alt="profileicon" />
                                        <Typography
                                            className={classes.typparagraph3}
                                            sx={{ lineHeight: '20px', fontWeight: 500, ml: 1, mr: 3 }}
                                        >
                                            Tracey Wilson
                                        </Typography>
                                        <Typography className={classes.typparagraph3}>August 20, 2022</Typography>
                                    </Box>
                                </>
                            )}
                        </div>

                        {/* Изображение 1 */}
                        <div>
                            {loading ? (
                                <Skeleton variant="rectangular" height={360} sx={{ borderRadius: 2 }} />
                            ) : (
                                <img className={classes.responsiveImg} src={image1} alt="image1" />
                            )}
                        </div>

                        {/* Текстовые блоки */}
                        <div>
                            {loading ? (
                                <Stack spacing={1}>
                                    <Skeleton variant="text" height={28} sx={{ maxWidth: 260 }} />
                                    <Skeleton variant="text" height={24} />
                                    <Skeleton variant="text" height={24} />
                                    <Skeleton variant="text" height={24} sx={{ maxWidth: '90%' }} />
                                </Stack>
                            ) : (
                                <Typography className={classes.typparagraph} sx={{ color: 'text.primary' }}>
                                    Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and
                                    creates memories that last a lifetime. However, traveling can also be stressful and overwhelming,
                                    especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks
                                    for a memorable journey and how to make the most of your travels. <br />
                                    <br />
                                    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
                                    This includes trying local cuisine, attending cultural events and festivals, and interacting with locals.
                                    Learning a few phrases in the local language can also go a long way in making connections and showing
                                    respect.
                                </Typography>
                            )}
                        </div>

                        {[
                            { title: 'Research Your Destination', body: `Before embarking on your journey, take the time to research your destination. This includes
              understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants,
              and accommodations. Doing so will help you navigate your destination with confidence and avoid any
              cultural faux pas.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus
              vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
              vitae. Viverra adipiscing at in tellus.` },
                            { title: 'Plan Your Itinerary', body: `While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary
              can help you make the most of your time and budget. Identify the must-see sights and experiences and
              prioritize them according to your interests and preferences. This will help you avoid overscheduling and
              ensure that you have time to relax and enjoy your journey.

              Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec
              ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit
              amet.` },
                        ].map((sec, idx) => (
                            <div key={idx}>
                                {loading ? (
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" height={30} sx={{ maxWidth: 300 }} />
                                        <Skeleton variant="text" height={24} />
                                        <Skeleton variant="text" height={24} sx={{ maxWidth: '95%' }} />
                                        <Skeleton variant="text" height={24} sx={{ maxWidth: '85%' }} />
                                    </Stack>
                                ) : (
                                    <>
                                        <Typography className={classes.typheader2} sx={{ color: 'text.primary' }}>
                                            {sec.title}
                                        </Typography>
                                        <Typography className={classes.typparagraph} sx={{ color: 'text.primary' }}>
                                            {sec.body}
                                        </Typography>
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Цитата */}
                        <div>
                            {loading ? (
                                <Skeleton variant="rounded" height={100} sx={{ borderRadius: 2 }} />
                            ) : (
                                <Typography
                                    className={classes.typparagraph1}
                                    sx={{
                                        bgcolor: 'background.paper',
                                        color: 'text.primary',
                                        border: (theme) => `1px solid ${theme.palette.divider}`,
                                    }}
                                >
                                    “ Traveling can expose you to new environments and potential health risks, so it's crucial to take
                                    precautions to stay safe and healthy. ”
                                </Typography>
                            )}
                        </div>

                        {/* Изображение 2 */}
                        <div>
                            {loading ? (
                                <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
                            ) : (
                                <img className={classes.responsiveImg} src={image2} alt="image2" />
                            )}
                        </div>

                        {/* Ещё секции */}
                        {[
                            { title: 'Pack Lightly and Smartly', body: `Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and
              efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable
              clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize
              space and minimize wrinkles.` },
                            { title: 'Stay Safe and Healthy', body: `Traveling can expose you to new environments and potential health risks, so it's crucial to take
              precautions to stay safe and healthy. This includes researching any required vaccinations or medications,
              staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also
              essential to keep your valuables safe and secure and to be aware of your surroundings at all times.` },
                            { title: 'Immerse Yourself in the Local Culture', body: `One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
              This includes trying local cuisine, attending cultural events and festivals, and interacting with locals.
              Learning a few phrases in the local language can also go a long way in making connections and showing
              respect.` },
                            { title: 'Capture Memories', body: `Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling,
              or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for
              years to come. However, it's also essential to be present in the moment and not let technology distract
              you from the beauty of your surroundings.` },
                            { title: 'Conclusion:', body: `Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following
              these tips and tricks, you can make the most of your journey and create memories that last a lifetime.
              So pack your bags, embrace the adventure, and enjoy the ride.` },
                        ].map((sec, idx) => (
                            <div key={`tail-${idx}`}>
                                {loading ? (
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" height={30} sx={{ maxWidth: 320 }} />
                                        <Skeleton variant="text" height={24} />
                                        <Skeleton variant="text" height={24} sx={{ maxWidth: '92%' }} />
                                        <Skeleton variant="text" height={24} sx={{ maxWidth: '80%' }} />
                                    </Stack>
                                ) : (
                                    <>
                                        <Typography className={classes.typheader2} sx={{ color: 'text.primary' }}>
                                            {sec.title}
                                        </Typography>
                                        <Typography className={classes.typparagraph} sx={{ color: 'text.primary' }}>
                                            {sec.body}
                                        </Typography>
                                    </>
                                )}
                            </div>
                        ))}
                        {/* ---- UI действий ---- */}
                        {!loading && (
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2 }}>
                                    <IconButton onClick={() => setLikes((l) => l + 1)} color="primary">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                    <Typography variant="body2">{likes} likes</Typography>

                                    <IconButton>
                                        <ChatBubbleOutlineIcon />
                                    </IconButton>
                                    <Typography variant="body2">{comments.length} comments</Typography>

                                    <IconButton onClick={() => setOpenShare(true)}>
                                        <ShareIcon />
                                    </IconButton>
                                    <Typography variant="body2">Share</Typography>
                                </Stack>

                                <Divider sx={{ my: 2 }} />

                                {/* Comments */}
                                <Stack spacing={2}>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        Comments
                                    </Typography>
                                    {comments.map((c) => (
                                        <Stack key={c.id} direction="row" spacing={2} alignItems="flex-start">
                                            <Avatar sx={{ width: 32, height: 32 }}>{c.author[0]}</Avatar>
                                            <Box>
                                                <Typography variant="body2" fontWeight={600}>
                                                    {c.author}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {c.text}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    ))}

                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar sx={{ width: 32, height: 32 }}>Y</Avatar>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            placeholder="Add a comment..."
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                        />
                                        <Button
                                            variant="contained"
                                            onClick={handleAddComment}
                                            disabled={!newComment.trim()}
                                        >
                                            Post
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Paper>
                        )}
                    </Stack>
                </div>

                {/* Drawer для шаринга */}
                <Drawer
                    anchor="bottom"
                    open={openShare}
                    onClose={() => setOpenShare(false)}
                    PaperProps={{ sx: { borderTopLeftRadius: 16, borderTopRightRadius: 16, p: 2 } }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Share this article
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="https://facebook.com" target="_blank">
                                <ListItemIcon><FacebookIcon color="primary" /></ListItemIcon>
                                <ListItemText primary="Facebook" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="https://twitter.com" target="_blank">
                                <ListItemIcon><TwitterIcon color="primary" /></ListItemIcon>
                                <ListItemText primary="Twitter / X" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="https://t.me/share/url" target="_blank">
                                <ListItemIcon><TelegramIcon color="primary" /></ListItemIcon>
                                <ListItemText primary="Telegram" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="https://linkedin.com" target="_blank">
                                <ListItemIcon><LinkedInIcon color="primary" /></ListItemIcon>
                                <ListItemText primary="LinkedIn" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Container>
        </MainLayout>
    );
}

export default ArticlePage;
