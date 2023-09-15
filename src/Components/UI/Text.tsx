import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { bold, regular } from '../../styles/fonts/index'

export const FontH1 = styled.h1<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#212121'};
  font-size: 56px;
  ${bold};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 32px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
`

export const FontH2 = styled.h2<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#212121'};
  font-size: 44px;
  ${bold};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 24px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
`

export const FontH3 = styled.h3<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#212121'};
  font-size: 28px;
  ${bold};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 20px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
`

export const FontH4 = styled.h4<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#212121'};
  font-size: 20px;
  ${bold};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 12px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
`

export const FontBody1 = styled.p<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#212121'};
  font-size: 18px;
  ${regular};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 8px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
`

export const FontBody2 = styled.p<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#616161'};
  font-size: 16px;
  ${regular};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 8px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
  display: ${({ display }) => display || 'inherit'};
`

export const FontBody3 = styled.p<CSSProperties>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color, theme }) =>
    theme[color as keyof typeof theme] || color || '#616161'};
  font-size: 16px;
  ${regular};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0  0 8px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || 'none'};
  border: 1px solid
    ${({ border, theme }) =>
      theme[border as keyof typeof theme] || border || 'none'};
`
