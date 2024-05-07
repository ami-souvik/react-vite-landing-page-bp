import { createTheme, responsiveFontSizes } from '@mui/material';

// https://mui.com/material-ui/customization/default-theme/
// yellow shade #F7B538, #FAC748
export const getDesignTokens = (mode) => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#FAC748',
            },
            secondary: {
              main: '#ffffff',
            }
          }
        : {
            primary: {
              main: '#FAC748',
            },
            secondary: {
              main: '#121212',
            },
          }),
    },
    typography: {
      fontFamily: 'Outfit',
    },
  });
  theme.typography.body2 = {
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  };
  return responsiveFontSizes(theme);
};
