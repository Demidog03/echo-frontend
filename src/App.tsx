import { RouterProvider } from "react-router"
import router from "./router"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
