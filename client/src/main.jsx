import { createRoot } from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { theme } from "./theme/index";
import CustomCursor from './components/customCursor/CustomCursor';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CustomCursor />
    <RouterProvider router={routers}>
      <CssBaseline />
    </RouterProvider>
  </ThemeProvider>
);
