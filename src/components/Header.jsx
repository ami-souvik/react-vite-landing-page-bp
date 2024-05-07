import { useTranslation } from 'react-i18next';
import { MenuItem, Stack, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Navigator, Title, ToggleMode } from '@components';
import { useState } from 'react';

export const Header = () => {
  const theme = useTheme();
  const mdw = useMediaQuery(theme.breakpoints.down('md'));
  const { i18n } = useTranslation();
  const [ln, setLn] = useState(i18n.language);
  const changeLanguage = (e) => {
    setLn(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Stack boxShadow={`0px 1px 24px -16px ${theme.palette.text.primary}`}>
      <Stack p={mdw ? '6px 24px' : '12px 48px'} direction="row" justifyContent="space-between" alignItems="center">
        <Title />
        <Stack direction="row" spacing={2} alignItems="center">
          <Navigator />
          <ToggleMode />
          <TextField select value={ln} variant="standard" onChange={changeLanguage} sx={{ width: '64px' }}>
            <MenuItem value="en">en</MenuItem>
            <MenuItem value="bn">bn</MenuItem>
          </TextField>
        </Stack>
      </Stack>
    </Stack>
  );
};
