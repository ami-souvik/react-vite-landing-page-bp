import { Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAction = styled(Link)(({ theme, disabled }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
  color: theme.palette.text.primary,
}));

export const Anchor = ({ active, href, click, actionSx, children }) => {
  return (
    <StyledAction disabled={active} href={href} onClick={click} sx={{ ...actionSx }}>
      <Typography fontWeight={active ? 600 : 400} fontFamily="Outfit">
        {children}
      </Typography>
    </StyledAction>
  );
};
