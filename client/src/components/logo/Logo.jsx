import React from 'react'
import { Stack, Box } from '../../mui/muiComponents';
import { NavLink } from "react-router-dom";

function Logo() {
  return (
        <Stack
          flexGrow={1}
          component={NavLink}
          to="/"
          justifyContent={'center'}
          alignContent={'center'}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Behan Portfolio Logo"
            sx={{
              width: { xs: 80, sm: 100 },
              userSelect: 'none',
              display: 'block',
            }}
          />
        </Stack>

  )
}

export default Logo