import { createElement } from 'react';
import { useMediaQuery } from '@mui/material';
import { NavigationDrawer, NavigationBar } from '@components';
import { routes } from '@config';
import { useRouter } from '@context';

export const Navigator = () => {
  const { state, navigate } = useRouter();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const click = (e, href) => {
    e.preventDefault();
    navigate(href);
  };
  return createElement(mdw ? NavigationDrawer : NavigationBar, { state, routes, click });
};
