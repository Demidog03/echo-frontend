import { Backdrop, Box } from '@mui/material';
import { keyframes } from '@mui/system';
import Logo from '../../../public/echo-logo-mini.png';

interface FullscreenLoadingProps {
    open: boolean;
}

const pulse = keyframes`
  0%   { transform: scale(0.96); opacity: .9; }
  50%  { transform: scale(1);    opacity: 1;  }
  100% { transform: scale(0.96); opacity: .9; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const spinReverse = keyframes`
  to { transform: rotate(-360deg); }
`;

export default function FullscreenLoading({ open }: FullscreenLoadingProps) {
    return (
        <Backdrop
            sx={(theme) => ({
                color: '#fff',
                zIndex: theme.zIndex.drawer + 1,
                bgcolor: '#ffffff', // чуть затемним фон
                backdropFilter: 'blur(2px)',
            })}
            open={open}
            aria-live="polite"
            aria-busy={open}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 96,
                    height: 96,
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                {/* Лого (пульс) */}
                <Box
                    component="img"
                    src={Logo}
                    alt="ECHO loading"
                    sx={(theme) => ({
                        width: '72px',
                        height: '72px',
                        objectFit: 'contain',
                        borderRadius: '18px',
                        animation: `${pulse} 1.6s ease-in-out infinite`,
                        boxShadow: `0 8px 24px ${theme.palette.mode === 'dark'
                            ? 'rgba(0,0,0,0.45)'
                            : 'rgba(0,0,0,0.18)'}`,
                    })}
                />

                {/* Внешнее кольцо (тонкое, медленное, реверс) */}
                <Box
                    sx={(theme) => ({
                        position: 'absolute',
                        inset: '-14px',
                        borderRadius: '50%',
                        borderStyle: 'dashed',
                        borderWidth: '2px',
                        borderColor: theme.palette.divider,
                        animation: `${spinReverse} 2.8s linear infinite`,
                    })}
                />

                {/* Внутреннее кольцо (сплошное, быстрее) */}
                <Box
                    sx={(theme) => ({
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        borderWidth: '3px',
                        borderStyle: 'solid',
                        borderColor: theme.palette.primary.main,
                        borderTopColor: 'transparent',
                        animation: `${spin} 1.2s linear infinite`,
                        boxShadow: `0 0 0 4px ${
                            theme.palette.mode === 'dark'
                                ? 'rgba(255,255,255,0.06)'
                                : 'rgba(0,0,0,0.04)'
                        } inset`,
                    })}
                />
            </Box>
        </Backdrop>
    );
}
