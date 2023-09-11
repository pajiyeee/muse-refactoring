'use client'

import styled from '@emotion/styled'
import { useState, useRef, useEffect } from 'react'
import { absolute, flexBox } from '@/styles/mixin'
import { fontBody2 } from '@/styles/fonts/index'
import { ArrowBackIos, ArrowForwardIos } from '@emotion-icons/material-twotone'

export const BANNER_IMAGE = [
  {
    id: 0,
    image: 'banner/image00.jpg',
    title: 'banner/title00.svg',
    text: `전 세계가 사랑한 명작, \n오리지널 매력 그대로 Coming soon.`,
    time: '2023.06.01 ~ 2023.11.03',
    theater: 'banner/theater00.png',
  },
  {
    id: 1,
    image: 'banner/image00.jpg',
    title: 'banner/title00.svg',
    text: `전 세계가 사랑한 명작, \n오리지널 매력 그대로 Coming soon.`,
    time: '2023.06.01 ~ 2023.11.03',
    theater: 'banner/theater00.png',
  },
  {
    id: 2,
    image: 'banner/image00.jpg',
    title: 'banner/title00.svg',
    text: `전 세계가 사랑한 명작, \n오리지널 매력 그대로 Coming soon.`,
    time: '2023.06.01 ~ 2023.11.03',
    theater: 'banner/theater00.png',
  },
  {
    id: 3,
    image: 'banner/image00.jpg',
    title: 'banner/title00.svg',
    text: `전 세계가 사랑한 명작, \n오리지널 매력 그대로 Coming soon.`,
    time: '2023.06.01 ~ 2023.11.03',
    theater: 'banner/theater00.png',
  },
]

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
                <div
                  css={{
                    backgroundImage: `url(${title})`,
                  }}
                />
                <p css={fontBody2()}>{text}</p>
                <span css={fontBody2()}>{time}</span>
                <div
                  css={{
                    backgroundImage: `url(${theater})`,
                  }}
                />
              </section>
            </li>
          )
        )}
      </Banner>
      <ArrowForward onClick={() => bannerForwardHandler(+1)} />
      <ArrowBack onClick={() => bannerBackHandler(-1)} />
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
    background-position: center left;
    background-repeat: no-repeat;
  }

  section {
    width: 80%;
    margin: auto;
    padding-top: 90px;
    padding-bottom: 60px;
  }

  div:first-of-type {
    width: 100%;
    height: 140px;
    margin-bottom: 32px;
    background-size: contain;
    background-position: bottom left;
    background-repeat: no-repeat;
  }

  p {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.gray_100};
  }

  span {
    color: ${({ theme }) => theme.color.gray_100};
  }

  div:last-of-type {
    width: 100%;
    height: 32px;
    margin-top: 72px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
  }
`
const ArrowForward = styled(ArrowBackIos)`
  position: absolute;
  ${absolute('50%', '4%', 'auto', '0, -50%')};
  width: 48px;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.3;
`

const ArrowBack = styled(ArrowForwardIos)`
  position: absolute;
  ${absolute('50%', 'auto', '4%', '0, -50%')};
  width: 48px;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.3;
`
