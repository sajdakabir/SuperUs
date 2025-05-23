import '../styles/globals.css';
import '../styles/editor.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
