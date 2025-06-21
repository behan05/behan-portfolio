import { createRoot } from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from "./theme/index";
import CustomCursor from './components/customCursor/CustomCursor';
import { SidebarProvider } from './context/SidebarContext';
import AppWithInit from './AppWithInit';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SidebarProvider>
      <CustomCursor />
      <AppWithInit />
    </SidebarProvider>
  </ThemeProvider>
);