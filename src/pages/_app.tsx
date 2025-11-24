import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppMain from '@/components/layouts/AppMain'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <AppMain>
      <Component {...pageProps} />
    </AppMain>
  )
 
}
 