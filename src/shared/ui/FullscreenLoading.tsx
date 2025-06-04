import { Backdrop, CircularProgress } from "@mui/material"

interface FullscreenLoadingProps {
    open: boolean
    // handleClose: () => void
}

function FullscreenLoading({ open }: FullscreenLoadingProps) {
    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default FullscreenLoading
