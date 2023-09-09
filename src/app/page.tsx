'use client'

import styled from '@emotion/styled'
import { flexBox } from '@/styles/mixin'
import { fontH2 } from '@/styles/fonts/index'
import { useState } from 'react'

export default function Home() {
  const [list, setList] = useState([])

  return (
    <>
      <Header />
      <Wrap>
        <h2 css={fontH2()}>뮤지컬 차트</h2>
        <List>
          {list.map((item) => (
            <></>
            // <>
            //   <h1>{item.title}</h1>
            //   <h5>{item.text}</h5>
            //   <p>{item.date}</p>
            //   <p>{item.theater}</p>
            // </>
          ))}
        </List>
      </Wrap>
    </>
  )
}

const Header = styled.header`
  ${flexBox()};
  position: relative;
  width: 100%;
  height: 40rem;
  background-color: #eeeeee;
`

const Wrap = styled.div`
  width: 80%;
  margin: 120px auto;
`

const List = styled.ul`
  ${flexBox('wrap')};
  gap: 20px;
`

const Dim = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0));
`
