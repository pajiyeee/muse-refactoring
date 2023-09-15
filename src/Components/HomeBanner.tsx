'use client'

import styled from '@emotion/styled'
import { useState, useRef, useEffect } from 'react'
import { FontBody2 } from './UI/Text'
import { absolute, flexBox } from '@/styles/mixin'
import { ArrowBackIos, ArrowForwardIos } from '@emotion-icons/material-twotone'
import { BANNER_IMAGE } from '@/constants'
import { theme } from '../styles/theme'
import BgImg from './UI/BgImg'

const HomeBanner = () => {
  const [bannerListPosition, setBannerListPosition] = useState(0)
  const [bannerItemPosition, setBannerItemPosition] = useState(0)
  const bannerListRef = useRef<HTMLUListElement>(null)
  const bannerItemRef = useRef<HTMLLIElement>(null)

  const bannerBackHandler = (move: number) => {
    if (-bannerListPosition < BANNER_IMAGE.length - 1) {
      setBannerListPosition(bannerListPosition + move)
      setBannerItemPosition(bannerItemPosition + move)
    }
  }

  const bannerForwardHandler = (move: number) => {
    if (-bannerListPosition > 0) {
      setBannerListPosition(bannerListPosition + move)
      setBannerItemPosition(bannerItemPosition + move)
    }
  }

  useEffect(() => {
    if (bannerListRef.current && bannerItemRef.current) {
      bannerListRef.current.style.transform = `translateX(${
        (bannerListPosition * 100) / BANNER_IMAGE.length
      }%)`
      bannerItemRef.current.style.transform = `translateX(-${bannerItemPosition}00%)`
    }
  }, [bannerItemPosition, bannerListPosition])

  return (
    <Header>
      <Banner ref={bannerListRef}>
        {BANNER_IMAGE.map(
          ({
            id,
            image,
            title,
            text,
            time,
            theater,
          }: {
            id: number
            image: string
            title: string
            text: string
            time: string
            theater: string
          }) => (
            <li
              key={id}
              css={{
                backgroundImage: `url(${image})`,
              }}
              ref={bannerItemRef}
            >
              <section>
                <BgImg
                  backgroundImage={`${title}`}
                  height={'140px'}
                  backgroundPosition={'bottom left'}
                  margin={'0 0 32px 0'}
                />
                <FontBody2 color={theme.color.gray_100}>{text}</FontBody2>
                <FontBody2 color={theme.color.gray_100}>{time}</FontBody2>
                <BgImg
                  backgroundImage={`${theater}`}
                  opacity={0.8}
                  height={'32px'}
                  backgroundPosition={'bottom left'}
                  margin={'72px 0 0 0'}
                />
              </section>
            </li>
          )
        )}
      </Banner>
      <IconArrowForward onClick={() => bannerForwardHandler(+1)} />
      <IconArrowBack onClick={() => bannerBackHandler(-1)} />
    </Header>
  )
}

export default HomeBanner

const Header = styled.header`
  position: relative;
  overflow-x: hidden;
`

const Banner = styled.ul`
  ${flexBox()};
  width: ${BANNER_IMAGE.length * 100}%;
  transition: all 500ms ease-in-out;
  overflow: hidden;

  li {
    width: 100%;
    height: max-content;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  section {
    width: 80%;
    margin: auto;
    padding-top: 90px;
    padding-bottom: 60px;
  }
`
const IconArrowForward = styled(ArrowBackIos)`
  ${absolute('50%', '4%', 'auto', '0, -50%')};
  width: 48px;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.3;
`

const IconArrowBack = styled(ArrowForwardIos)`
  ${absolute('50%', 'auto', '4%', '0, -50%')};
  width: 48px;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.3;
`
