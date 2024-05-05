import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getDesignTokens } from '@styles';
import { Route, RouterProvider, Routes, useApp } from '@context';
import { Home, About, Blogs, Contact } from '@screens';
import { Background, Footer, Header } from '@components';

function App() {
  const { mode } = useApp();
  const theme = useMemo(() => getDesignTokens(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <CssBaseline />
        <RouterProvider href="/">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </RouterProvider>
      </Background>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
