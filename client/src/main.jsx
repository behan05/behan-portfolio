import { createRoot } from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { theme } from "./theme/index";
import CustomCursor from './components/customCursor/CustomCursor';
import { SidebarProvider } from './context/SidebarContext';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SidebarProvider>
      <CustomCursor />
      <RouterProvider router={routers} />
    </SidebarProvider>
  </ThemeProvider>
);