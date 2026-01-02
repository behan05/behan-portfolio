import React from 'react'
import Contact from '../components/contact/Contact';
import { Box } from '../mui/muiComponents';

function ContactPage() {
    return (
        <Box sx={{ px: { xs: 2, sm: 4 } }}>
            <Contact />
        </Box>
    )
}

export default ContactPage;