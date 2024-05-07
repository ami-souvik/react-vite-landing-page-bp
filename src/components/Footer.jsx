import React from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material';

export const Footer = () => {
  const { t } = useTranslation();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack
      padding={mdw ? '6px 24px' : '12px 48px'}
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Stack direction="row">
        <List>
          <ListItem>
            <Typography fontWeight={600}>{t('footer.support')}</Typography>
          </ListItem>
          <ListItem>{t('footer.helpCenter')}</ListItem>
          <ListItem>{t('footer.contactUs')}</ListItem>
          <ListItem>{t('footer.team')}</ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
