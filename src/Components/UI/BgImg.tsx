import styled from '@emotion/styled'
import { CSSProperties } from 'react'

const BgImg = styled.div<CSSProperties>`
  background-color: ${({ backgroundColor, theme }) =>
    theme[backgroundColor as keyof typeof theme] || backgroundColor || 'none)'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: ${({ backgroundSize }) => backgroundSize || 'contain'};
  background-position: ${({ backgroundPosition }) =>
    backgroundPosition || 'center'};
  background-repeat: ${({ backgroundRepeat }) =>
    backgroundRepeat || 'no-repeat'};
  opacity: ${({ opacity }) => opacity || 1};
`

export default BgImg
