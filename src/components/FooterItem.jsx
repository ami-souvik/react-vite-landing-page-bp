import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import { Anchor } from '@components';

const StyledLink = styled(Link)(({ disabled }) => ({
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
}));

export const FooterItem = ({ badge, heading, href, onClick, children }) => {
  const clickHandler = (e) => {
    if (onClick) {
      e?.preventDefault();
      onClick();
    }
  };
  return (
    <ListItem sx={{ padding: '6px 12px' }}>
      {badge && (
        <>
          {badge}
          <Box width="12px" />
        </>
      )}
      <Anchor href={href} click={clickHandler}>
        {children}
      </Anchor>
    </ListItem>
  );
};
