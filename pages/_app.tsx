import '../styles/globals.css'
import { FC } from 'react'
import type { AppProps } from 'next/app'

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
