import React from 'react';
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import reactLogo from '@assets/react.png';
import viteLogo from '@assets/vite.png';

const Image = styled('img')({
  width: '24px',
  borderRadius: '4px',
});

export const Title = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="h4" lineHeight={0} fontWeight={700}>
        Generic
      </Typography>
      <Image src={reactLogo} />
      <Image src={viteLogo} />
    </Stack>
  );
};
