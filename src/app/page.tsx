'use client'

import styled from '@emotion/styled'
import { useState } from 'react'
import { FontH4, FontBody2, FontBody3, FontBody4 } from '../Components/UI/Text'
import { bold } from '@/styles/fonts/index'
import { flexBox, absolute } from '@/styles/mixin'
import HomeBanner from '@/Components/HomeBanner'
import Button from '@/Components/UI/Button'
import { theme } from '@/styles/theme'
import { Theme } from '@emotion/react'

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

              <LimitedAge ageRated={15} theme={theme}>
                <FontBody2 css={bold} padding={'0'} color={theme.color.white}>
                  15{/* {handleAgeRated()} */}
                </FontBody2>
              </LimitedAge>
            </Card>

            <FontH4>아이다{/* {item.musicalName} */}</FontH4>
            <FontBody3 padding={'0'} color={theme.color.gray_900}>
              {/*`${item.theater}`*/}블루스퀘어 신한카드홀
            </FontBody3>
            <FontBody3>{/*`${item.releasedDate}`*/}23.09.20</FontBody3>
            <FontBody4
              margin={'0 4px 0 0'}
              padding={'2px 4px'}
              color={theme.color.primary_normal}
              border={theme.color.primary_normal}
            >
              D-15
              {/*compareDate(item.releasedDate)*/}
            </FontBody4>
            <FontBody4
              padding={'2px 4px'}
              color={theme.color.white}
              backgroundColor={theme.color.primary_normal}
              border={theme.color.primary_normal}
            >
              예매율 80%{/* `${item.reservationRated}%` */}
            </FontBody4>
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
  background-color: ${({
    ageRated,
    theme,
  }: {
    ageRated: number
    theme: Theme
  }) => theme.ageColor[ageRated as keyof typeof theme.ageColor]};
`
