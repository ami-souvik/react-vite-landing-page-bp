import { Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Anchor } from '@components';
import { Fragment } from 'react';

const Seperator = styled(Box)(({ theme }) => ({
  height: '4px',
  width: '4px',
  borderRadius: '4px',
  backgroundColor: theme.palette.text.primary,
}));

export const NavigationBar = ({ state, routes, click }) => (
  <Stack flex={1} direction="row" alignItems="center" spacing={2}>
    {routes.map((route, index) => (
      <Fragment key={route.href}>
        <Anchor active={state.href === route.href} href={route.href} click={(e) => click(e, route.href)}>
          {route.label}
        </Anchor>
        {index !== routes.length - 1 && <Seperator />}
      </Fragment>
    ))}
  </Stack>
);
