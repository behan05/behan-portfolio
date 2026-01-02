import { forwardRef } from 'react';
import { Button } from "../../mui/muiComponents";

const CustomButton = forwardRef(({ children, sx = {}, ...props }, ref) => {

  return (
    <Button
      ref={ref}
      {...props}
      sx={{
        textTransform: 'none',
        px: 3.5,
        py: 1,
        fontWeight: 500,
        letterSpacing: 0.6,
        borderRadius: 1,
        fontStyle: 'normal',

        color: 'text.primary',
        background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(124,124,255,0.12))',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',

        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: `
          0 0 0 rgba(0,0,0,0),
          inset 0 0 0 rgba(255,255,255,0)
        `,

        transition: 'all 0.35s ease',

        '&:hover': {
          background: 'linear-gradient(135deg, rgba(0,229,255,0.28), rgba(124,124,255,0.24))',
          boxShadow: `
            0 0 14px rgba(0,229,255,0.25),
            inset 0 0 8px rgba(255,255,255,0.08)
          `,
          transform: 'translateY(-2px)',
        },

        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 0 6px rgba(0,229,255,0.2)',
        },
        ...sx,
      }}
    >
      {children}
    </Button>

  );
});

export default CustomButton;
