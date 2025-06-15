import { Box, useTheme } from "../mui/muiComponents";
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {

    const theme = useTheme();

    return (
        <Box sx={{
            bgcolor: theme.palette.background.default,
            minHeight: '300vh',
        }}>

            {/* Header */}
            <Header />

            {/* Middel Area */}
            <Box >
                {/* Sidebar */}
                <Box></Box>
                {/* Main Content */}
                <Box>
                    {Outlet}
                </Box>
            </Box>

            {/* Footer */}
        </Box>
    )
}

export default Layout