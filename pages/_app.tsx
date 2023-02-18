import '../styles/globals.css'
import { FC } from 'react'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default wrapper.withRedux(MyApp)
