import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'h1' },
                            style: {
                                fontSize: '4rem'
                            }
                        }
                    ]
                }
            }
        }
    }
})

export default theme