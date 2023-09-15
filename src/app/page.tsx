'use client'

import styled from '@emotion/styled'
import { useState } from 'react'
import { FontH2, FontH4, FontBody2 } from '../Components/UI/Text'
import { flexBox, absolute, divider } from '@/styles/mixin'
import { fontH2, fontH4, fontBody2, bold } from '@/styles/fonts/index'
import HomeBanner from '@/Components/HomeBanner'
import Button from '@/Components/UI/Button'
import { theme } from '@/styles/theme'

export default function Home() {
  const [list, setList] = useState([])
  const [buttonOn, setButtonOn] = useState(false)

  const handleAgeRated = () => {
    // if (item.ageRated === 1) 'All'
    // else item.ageRated
  }

  return (
    <>
      <HomeBanner />
      <Wrap>
        <List>
          {/* {list.map((item) => ( */}
          <div>
            <Card
              onMouseOver={() => setButtonOn(true)}
              onMouseLeave={() => setButtonOn(false)}
              // key={id}
              // css={{
              //   backgroundImage: `url(${item.postImageUrl})`,
              // }}
            >
              {buttonOn && (
                <>
                  <Dim />
                  <ButtonWrap>
                    <Button background={'none'} border={theme.color.gray_500}>
                      상세보기
                    </Button>
                    <Button background={'none'} border={theme.color.gray_500}>
                      빠른예매
                    </Button>
                  </ButtonWrap>
                </>
              )}

              <LimitedAge ageRated={15}>
                <FontBody2 css={bold} padding={'0'} color={theme.color.white}>
                  15{/* {handleAgeRated()} */}
                </FontBody2>
              </LimitedAge>
            </Card>

            <FontH4>아이다{/* {item.musicalName} */}</FontH4>
            <FontBody2>
              예매율 <b css={bold}>80%{/* `${item.reservationRated}%` */}</b>
            </FontBody2>
            <FontBody2
              css={bold}
              display={'inline-block'}
              color={theme.color.primary_normal}
            >
              D-15
              {/*compareDate(item.releasedDate)*/}
            </FontBody2>
            <Divider />
            <FontBody2 display={'inline-block'}>
              개봉일 {/*`${item.releasedDate}`*/}23.09.20
            </FontBody2>
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
  background: #ccc;
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

const LimitedAge = styled.div`
  ${absolute('10px', 'auto', '10px', '0,0')};
  padding: 6px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ ageRated, theme }) =>
    theme.ageColor[ageRated as keyof typeof theme.ageColor]};
`

const Divider = styled.div`
  display: inline-block;
  ${divider()};
`
