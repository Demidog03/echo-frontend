import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';

type Ctx = { mode: PaletteMode; toggleMode: () => void };
const ThemeModeCtx = createContext<Ctx>({ mode: 'light', toggleMode: () => {} });

export function useThemeMode() {
    return useContext(ThemeModeCtx);
}

export default function ThemeModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<PaletteMode>(() => {
        const saved = localStorage.getItem('echo-theme');
        return (saved as PaletteMode) || 'light';
    });

    useEffect(() => {
        localStorage.setItem('echo-theme', mode);
    }, [mode]);

    const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: { main: '#4B6BFB' },
                },
                shape: { borderRadius: 12 },
            }),
        [mode]
    );

    return (
        <ThemeModeCtx.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeCtx.Provider>
    );
}
