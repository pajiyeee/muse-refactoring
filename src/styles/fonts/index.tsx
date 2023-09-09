//index.tsx
import { css } from '@emotion/react'

import {
  notoSansKRBold,
  notoSansKRRegular,
  notoSansKRExtraLight,
} from './notoSans'

const bold = css`
  font-family: ${notoSansKRBold.style.fontFamily};
`

const regular = css`
  font-family: ${notoSansKRRegular.style.fontFamily};
`

const extraLight = css`
  font-family: ${notoSansKRExtraLight.style.fontFamily};
`

const fontH1 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 32px',
  color: string | undefined = '#212121'
) => css`
  font-size: 56px;
  ${bold};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

const fontH2 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 24px',
  color: string | undefined = '#212121'
) => css`
  font-size: 44px;
  ${bold};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

const fontH3 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 20px',
  color: string | undefined = '#212121'
) => css`
  font-size: 28px;
  ${bold};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

const fontH4 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 16px',
  color: string | undefined = '#212121'
) => css`
  font-size: 20px;
  ${regular};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

const fontBody1 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 12px',
  color: string | undefined = '#212121'
) => css`
  font-size: 18px;
  ${regular};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

const fontBody2 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 12px',
  color: string | undefined = '#424242'
) => css`
  font-size: 16px;
  ${regular};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

const fontBody3 = (
  margin: string | undefined = '0 auto',
  padding: string | undefined = '0 auto 8px',
  color: string | undefined = '#616161'
) => css`
  font-size: 13px;
  ${regular};
  color: ${color};
  margin: ${margin};
  padding: ${padding};
`

export {
  bold,
  regular,
  extraLight,
  fontH1,
  fontH2,
  fontH3,
  fontH4,
  fontBody1,
  fontBody2,
  fontBody3,
}
