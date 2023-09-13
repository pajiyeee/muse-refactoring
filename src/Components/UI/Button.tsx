import styled from '@emotion/styled'
import { CSSProperties } from 'react'

const Button = styled.button<CSSProperties>`
  background: ${({ background, theme }) =>
    theme[background as keyof typeof theme] || background || '#6200EE'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || 'white'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || ''};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  text-align: center;
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '12px 16px 12px 16px'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
  white-space: wrap;
  z-index: ${({ zIndex }) => zIndex ?? 'none'};
  &:hover {
    background: ${({ theme }) => theme.color.black};
    border: 1px solid transparent;
  }
  &:disabled {
    background: ${({ theme }) => theme.color.gray_300};
  }
  transition: all 100ms linear;
`

export default Button
