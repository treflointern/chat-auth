import '../styles/globals.css'
import '../styles/chats.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context'
import Backendless from 'backendless'
function MyApp({ Component, pageProps }: AppProps) {
  Backendless.initApp('0F12B69E-DAB8-64B1-FF04-5629AD521700', 'D0E9777B-0A5C-4894-8FD3-E92F69AE4D51');
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
)
}

export default MyApp
