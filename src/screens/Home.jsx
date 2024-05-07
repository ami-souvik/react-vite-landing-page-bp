import { useTranslation } from 'react-i18next';
import { Link, Stack, Typography, useMediaQuery } from '@mui/material';
import CleanHandsRoundedIcon from '@mui/icons-material/CleanHandsRounded';
import { Badge, Clickable } from '@components';

export const Home = () => {
  const { t } = useTranslation();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack flex={1} spacing={1} marginY={6} alignItems="flex-start">
      <Stack direction={mdw ? 'column' : 'row'} spacing={4}>
        <Stack maxWidth="560px" spacing={1} alignItems="flex-start">
          <Typography variant="h3" paddingY="16px">
            {t('home.title.prefix')}{' '}
            <Link target="_blank" href="https://github.com/heres-sav/react-vite-landing-page-bp">
              <strong>{t('home.title.main')}</strong>
            </Link>
            {t('home.title.suffix')}
          </Typography>
          <Clickable variant="contained">{t('home.mainBtnTxt')}</Clickable>
        </Stack>
        <Badge id="default-badge" label={t('home.mainBadgeTxt')} icon={CleanHandsRoundedIcon} />
      </Stack>
    </Stack>
  );
};
