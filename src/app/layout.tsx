'use client'

import { Global, ThemeProvider } from '@emotion/react'
import globalStyle from '../styles/global'
import theme from '../styles/theme'
import { bold, regular, extraLight } from '../styles/fonts/index'
import { Metadata } from 'next'

export const metaData: Metadata = {
  title: '뮤즈, 뮤지컬 빠른 예매',
  description: '뮤지컬 자리 예매도 복잡한 절차 없이 빠르게 진행할 수 있는 뮤즈',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <html lang="en" css={regular}>
          <body suppressHydrationWarning={true}>{children}</body>
        </html>
      </ThemeProvider>
    </>
  )
}
