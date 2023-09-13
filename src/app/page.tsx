'use client'

import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { useState } from 'react'
import { flexBox, absolute, divider } from '@/styles/mixin'
import { fontH2, fontH4, fontBody2, bold } from '@/styles/fonts/index'
import HomeBanner from '@/Components/HomeBanner'
import { Theme } from '@emotion/react'
import Button from '@/Components/UI/Button'
import { theme } from '@/styles/theme'

export default function Home() {
  const [list, setList] = useState([])

  const handleAgeRated = () => {
    // if (item.ageRated === 1) 'All'
    // else item.ageRated
  }

  return (
    <>
      <HomeBanner />
      <Wrap>
        <h2 css={fontH2()}>뮤지컬 차트</h2>
        <List>
          {/* {list.map((item) => ( */}
          <div>
            <Card
            // key={id}
            // css={{
            //   backgroundImage: `url(${item.postImageUrl})`,
            // }}
            >
              <Dim />
              <ButtonWrap>
                <Button background={'none'} border={theme.color.gray_500}>
                  상세보기
                </Button>
                <Button background={'none'} border={theme.color.gray_500}>
                  빠른예매
                </Button>
              </ButtonWrap>
              <LimitedAge ageRated={15}>
                15{/* {handleAgeRated()} */}
              </LimitedAge>
            </Card>

            <h4 css={fontH4()}>아이다{/* {item.musicalName} */}</h4>
            <p css={fontBody2()}>
              예매율 <b css={bold}>80%{/* `${item.reservationRated}%` */}</b>
            </p>
            <span css={fontBody2()}>{/*`${item.releasedDate}`*/}23.09.20</span>
            <Divider />
            <span>
              D-15
              {/*compareDate(item.releasedDate)*/}
            </span>
          </div>
          {/* ))} */}
        </List>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 80%;
  margin: 120px auto;
`

const List = styled.ul`
  ${flexBox('wrap')};
  gap: 20px;
  width: 100%;
`

const Card = styled.li`
  position: relative;
  width: 260px;
  height: 346px;
  margin-bottom: 12px;
  overflow: hidden;
`

const Dim = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`

const ButtonWrap = styled.div`
  ${absolute()};
  ${flexBox()};
  width: 90%;
  gap: 10px;
  z-index: 20;
`

const LimitedAge = styled.span`
  ${absolute('10px', 'auto', '10px', '0,0')};
  ${fontBody2('auto', '0')}
  padding: 6px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ ageRated, theme }) =>
    theme.ageColor[ageRated as keyof typeof theme.ageColor]};
`

const Divider = styled.div`
  display: inline-block;
  ${divider()};
`
