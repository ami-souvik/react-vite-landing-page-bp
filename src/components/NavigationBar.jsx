import { Stack, Typography, Link, Box, useMediaQuery, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from '@context';

const StyledLink = styled(Link)(({ disabled }) => ({
  textDecoration: 'none',
  userSelect: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
}));

const Key = ({ href, children }) => {
  const { state, navigate } = useRouter();
  const active = state.href === href;
  const click = (e) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <StyledLink disabled={active} href={href} onClick={click}>
      <Typography fontWeight={active ? 600 : 400} fontFamily="Outfit">
        {children}
      </Typography>
    </StyledLink>
  );
};

const Seperator = () => <Box height="4px" width="4px" borderRadius="4px" bgcolor="text.primary" />;

export const NavigationBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  if (matches)
    return (
      <Box position="fixed" left="0px" bottom="0px" width="100%" height="48px" boxShadow="0px -1px 12px 2px #0002">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    );
  return (
    <Stack width="100%" direction="row" alignItems="center" spacing={2}>
      <Key href="/">Home</Key>
      <Seperator />
      <Key href="/about">About</Key>
      <Seperator />
      <Key href="/blogs">Blogs</Key>
      <Seperator />
      <Key href="/contact">Contact</Key>
    </Stack>
  );
};
