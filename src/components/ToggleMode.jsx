import { Box, Stack, Switch, colors, keyframes, styled, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useApp } from '@context';

const Toggle = styled(Switch)(({ theme }) => ({
  width: 44,
  height: 28,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 1,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}22`,
    },
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
      transform: 'translateX(16px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 24,
    height: 24,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20,
  },
}));

export const ToggleMode = () => {
  const theme = useTheme();
  const { mode, toggleMode } = useApp();
  return (
    <Toggle
      onClick={toggleMode}
      checkedIcon={<LightModeIcon />}
      icon={<DarkModeIcon htmlColor={theme.palette.secondary.main} />}
    />
    // <Stack
    //   width="40px"
    //   padding="2px"
    //   direction="row"
    //   borderRadius="50px"
    //   bgcolor="primary.main"
    //   alignItems="center"
    //   onClick={toggleMode}
    //   sx={{ cursor: 'pointer' }}
    // >
    //   <Box fontSize="1rem" lineHeight={0}>
    //     {mode == 'light' ? (
    //       <Lever sx={{ animation: `${left} 0.2s linear forwards` }}>
    //         <LightModeIcon fontSize="inherit" htmlColor={theme.palette.secondary.main} />
    //       </Lever>
    //     ) : (
    //       <Lever sx={{ animation: `${right} 0.2s linear forwards` }}>
    //         <DarkModeIcon fontSize="inherit" htmlColor={theme.palette.secondary.main} />
    //       </Lever>
    //     )}
    //   </Box>
    // </Stack>
  );
};
