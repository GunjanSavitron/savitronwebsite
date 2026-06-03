import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
  },
  palette: {
    mode: 'light',
    primary: { main: '#1C1C1C', contrastText: '#FAFAFA' },
    secondary: { main: '#B8962E', contrastText: '#1C1C1C' },
    background: { default: '#FAFAFA', paper: '#FFFFFF' },
    text: { primary: '#1C1C1C', secondary: '#555555' },
    divider: '#E2E2E2',
  },
  typography: {
    fontFamily: 'var(--font-body), Inter, sans-serif',
    h1: {
      fontFamily: 'var(--font-heading), "Cormorant Garamond", serif',
      fontSize: '2rem',
      '@media (min-width:600px)': { fontSize: '2.5rem' },
      '@media (min-width:960px)': { fontSize: '3rem' }
    },
    h2: {
      fontFamily: 'var(--font-heading), "Cormorant Garamond", serif',
      fontSize: '1.5rem',
      '@media (min-width:600px)': { fontSize: '1.875rem' },
      '@media (min-width:960px)': { fontSize: '2.25rem' }
    },
    h3: {
      fontFamily: 'var(--font-heading), "Cormorant Garamond", serif',
      fontSize: '1.25rem',
      '@media (min-width:600px)': { fontSize: '1.5rem' },
      '@media (min-width:960px)': { fontSize: '1.875rem' }
    },
    h4: {
      fontFamily: 'var(--font-heading), "Cormorant Garamond", serif',
      fontSize: '1.1rem',
      fontWeight: 500,
      '@media (min-width:960px)': { fontSize: '1.25rem' }
    },
    body1: {
      fontFamily: 'var(--font-body), Inter, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.7,
      '@media (min-width:600px)': { fontSize: '0.95rem' },
      '@media (min-width:960px)': { fontSize: '1rem' }
    },
    body2: {
      fontFamily: 'var(--font-body), Inter, sans-serif',
      fontSize: '0.8125rem',
      lineHeight: 1.6,
    }
  }
});

export default theme;
