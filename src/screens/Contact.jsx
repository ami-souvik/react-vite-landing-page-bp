import { useTranslation } from 'react-i18next';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { Link, Stack, Typography, useTheme } from '@mui/material';
import { Clickable } from '@components';
import { FTextField } from '@mui-w-form';

export const Contact = () => {
  const theme = useTheme();
  const methods = useForm({
    mode: 'onSubmit',
  });
  const fieldNamePrefix = 'contact';
  const { control, handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };
  const { t } = useTranslation();
  return (
    <FormProvider {...methods}>
      <Form control={control} onSubmit={handleSubmit(onSubmit)}>
        <Stack flex={1} spacing={1} marginY={6} direction="row">
          <Stack flex={1} spacing={4}>
            <Typography variant="h5" fontWeight={600}>
              {t('contact.title')}
            </Typography>
            <Stack spacing={1}>
              <Typography>{t('contact.detailsLabel.email')}</Typography>
              <Link>
                <Typography variant="h5" fontWeight={600}>
                  {t('contact.dmyDetailsValue.email')}
                </Typography>
              </Link>
            </Stack>
            <Stack spacing={1}>
              <Typography>{t('contact.detailsLabel.phone')}</Typography>
              <Link>
                <Typography variant="h5" fontWeight={600}>
                  {t('contact.dmyDetailsValue.phone')}
                </Typography>
              </Link>
            </Stack>
            <Stack spacing={1} alignItems="flex-start">
              <Typography>{t('contact.detailsLabel.scheduleMeeting')}</Typography>
              <Clickable variant="contained">{t('contact.dmyDetailsValue.scheduleMeetingBtn')}</Clickable>
            </Stack>
          </Stack>
          <Stack
            flex={1}
            maxWidth="560px"
            p="32px 16px"
            spacing={2}
            borderRadius={2}
            alignItems="flex-start"
            bgcolor="background.default"
            border={`1px solid ${theme.palette.text.primary}`}
          >
            <FTextField fullWidth required label={t('contact.formLabel.name')} name={`${fieldNamePrefix}.name`} />
            <FTextField fullWidth required label={t('contact.formLabel.email')} name={`${fieldNamePrefix}.email`} />
            <FTextField
              fullWidth
              required
              multiline
              rows={3}
              label={t('contact.formLabel.description')}
              name={`${fieldNamePrefix}.description`}
            />
            <Clickable type="submit" variant="contained">
              {t('contact.formLabel.submitBtn')}
            </Clickable>
          </Stack>
        </Stack>
      </Form>
    </FormProvider>
  );
};
