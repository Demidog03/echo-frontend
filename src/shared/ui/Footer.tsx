
import {
  Box,
  Typography,
  Link,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Logo from '../../../public/logo.svg';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', mt: 4, pt: 6, pb: 3 }}>
      <Grid container spacing={4} justifyContent="center" px={{ xs: 2, md: 8 }}>
        {/* About */}
        <Grid item xs={12} sm={6} md={3} sx={{ mr: "20px"}}>
          <Typography variant="h6" fontWeight={700} gutterBottom>About</Typography>
          <Typography variant="body2" color="text.secondary" noWrap={false} sx={{ width: '280px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography variant="body2" mt={2}><strong>Email:</strong> info@jstemplate.net</Typography>
          <Typography variant="body2"><strong>Phone:</strong> 880 123 456 789</Typography>
        </Grid>

        {/* Quick Link */}
        <Grid item xs={6} sm={3} md={2} sx={{ ml: "138px", mr: "80px"}}>
          <Typography variant="h6" gutterBottom fontWeight={700}>Quick Link</Typography>
          {['Home', 'About', 'Blog', 'Archived', 'Author', 'Contact'].map((item) => (
            <Link href="#" key={item} underline="none" color="text.secondary" display="block" py={0.5}>
              {item}
            </Link>
          ))}
        </Grid>

        {/* Category */}
        <Grid item xs={6} sm={3} md={2} sx={{mr: "138px"}}>
          <Typography variant="h6" gutterBottom fontWeight={700}>Category</Typography>
          {['Lifestyle', 'Technology', 'Travel', 'Business', 'Economy', 'Sports'].map((item) => (
            <Link href="#" key={item} underline="none" color="text.secondary" display="block" py={0.5}>
              {item}
            </Link>
          ))}
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#fff',
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{textAlign: "center"}} fontWeight={700}>Weekly Newsletter</Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{textAlign: "center"}}>
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
                  <MailOutlineIcon fontSize="small" />
                ),
              }}
            />
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: '#4B6BFB' }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Bottom section */}
      <Grid container justifyContent="space-between" alignItems="center" px={{ xs: 2, md: 8}} sx={{ maxWidth: "1450px", margin: "0 auto" }}>    
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
            <img src={Logo} alt="Logo" width={40} height={40} />
          <div>
            <Typography variant="body1">
                Meta<strong>Blog</strong>
            </Typography>
            <Typography>
                © JS Template 2023. All Rights Reserved.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" underline="none" color="text.secondary">
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
