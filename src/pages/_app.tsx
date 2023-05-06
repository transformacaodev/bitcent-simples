import { AutenticacaoProvider } from '@/data/contexts/AutenticacaoContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AutenticacaoProvider>
            <Component {...pageProps} />
        </AutenticacaoProvider>
    )
}
