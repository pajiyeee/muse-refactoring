'use client'

import styled from '@emotion/styled'
import css from 'styled-jsx/css'
import { useState } from 'react'
import { flexBox, absolute, divider } from '@/styles/mixin'
import { fontH2, fontH4, fontBody2, bold } from '@/styles/fonts/index'
import HomeBanner from '@/Components/HomeBanner'

export default function Home() {
  const [list, setList] = useState([])

  const handleAgeRated = () => {
    if (item.ageRated === 1) 'All'
    else item.ageRated
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
              <div>
                <LimitedAge ageRated={15}>
                  15{/* {handleAgeRated()} */}
                </LimitedAge>
              </div>
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
  width: 260px;
  height: 346px;
  margin-bottom: 12px;
  overflow: hidden;

  div {
    position: relative;
    width: 100%;
    height: 100%;
    background: #ccc;
  }
`

const LimitedAge = styled.span`
  ${absolute('10px', 'auto', '10px', '0,0')};
  ${fontBody2('auto', '0')}
  padding: 6px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, ageRated }) => theme.color.ageColor[ageRated]};
`

const Divider = styled.div`
  display: inline-block;
  ${divider()}
`

const Dim = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0));
`
