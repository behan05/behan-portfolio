import { forwardRef } from 'react';
import { Button } from "../../mui/muiComponents";

const CustomButton = forwardRef(({ children, sx = {}, ...props }, ref) => {

  return (
    <Button
      ref={ref}
      sx={{
        textTransform: 'none',
        px: 3,
        py: 1,
        fontWeight: 600,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>

  );
});

export default CustomButton;
