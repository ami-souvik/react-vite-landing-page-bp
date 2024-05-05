import React from 'react';
import { List, Stack, Typography } from '@mui/material';
import { FooterItem } from '@components';

export const Footer = () => {
  return (
    <Stack padding="12px 48px" direction="row" justifyContent="space-between" alignItems="flex-end">
      <Stack direction="row">
        <List>
          <FooterItem heading>Support</FooterItem>
          <FooterItem>Help Center</FooterItem>
          <FooterItem>Contact Us</FooterItem>
          <FooterItem>Team</FooterItem>
        </List>
      </Stack>
    </Stack>
  );
};
