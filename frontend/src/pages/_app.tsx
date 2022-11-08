import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />

      {/* toast */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          duration: 3000,
          style: {
            background: '#ffffff',
            color: '#1d1d1d',
          },
        }}
      />
    </AuthProvider>
  )
}
