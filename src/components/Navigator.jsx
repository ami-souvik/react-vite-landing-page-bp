import { createElement } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const translatedRoutes = routes.map((r) => ({
    ...r,
    label: t(r.label),
  }));
  return createElement(mdw ? NavigationDrawer : NavigationBar, { state, routes: translatedRoutes, click });
};
