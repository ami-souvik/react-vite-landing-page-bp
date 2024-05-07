import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const FTextField = ({ name, required = false, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField value={value} onBlur={onBlur} onChange={(e) => onChange(e.target.value)} {...other} />
      )}
      name={name}
      control={control}
    />
  );
};
