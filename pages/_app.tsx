import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Cabeçalho from '../src/components/Cabeçalho/Cabeçalho';
import { ThemeProvider } from '@mui/material';
import tema from '../src/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabeçalho/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
