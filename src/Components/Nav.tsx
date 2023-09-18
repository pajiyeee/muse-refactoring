import styled from '@emotion/styled'
import BgImg from './UI/BgImg'
import { FontBody1, FontBody3 } from '../Components/UI/Text'
import { LockAlt, LockOpenAlt } from '@emotion-icons/boxicons-regular'
import { Search } from '@emotion-icons/boxicons-regular'
import { Ticket } from '@emotion-icons/heroicons-outline'
import { absolute, flexBox } from '@/styles/mixin'
import { Theme } from '@emotion/react'
import { theme } from '@/styles/theme'
import { useState } from 'react'

const Nav = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)

  return (
    <Wrap>
      <section>
        <SearchForm>
          <BgImg
            backgroundImage={'/muse-logo-purple.png'}
            width={'120px'}
            height={'50px'}
            backgroundSize={'contain'}
          />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocus((prev) => !prev)}
            placeholder="어떤 공연을 찾으시나요?"
          />
          <Icon20 isActive={searchValue !== ''} theme={theme}>
            <Search />
          </Icon20>
        </SearchForm>

        <Menu>
          <FontBody3>로그인</FontBody3>
          <FontBody3>예매하기</FontBody3>
        </Menu>
      </section>
    </Wrap>
  )
}

export default Nav

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_200};
  padding: 12px 0;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;

  section {
    width: 80%;
    margin: 0 auto;
    ${flexBox('row', 'nowrap', 'space-between', 'stretch')};
  }
`

const SearchForm = styled.div`
  ${flexBox('row', 'nowrap', 'start')};
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;

  input {
    width: 100%;
    background-color: none;
    border: none;
    outline: none;
    padding-left: 40px;

    &::placeholder {
      width: 100%;
      padding: 8px 0;
      font-size: 16px;
      color: ${({ theme }) => theme.color.gray_600};
    }
  }
`

const Menu = styled.div`
  ${flexBox('row', 'wrap', 'end', 'stretch')};
  margin: auto 0 auto 40px;

  p {
    display: inline;
    margin: 0 0 0 16px;
    padding: 0 6px;
    color: ${({ theme }) => theme.color.gray_800};
  }
`

const Icon20 = styled.div`
  ${absolute('50%', 'auto', '12px', '0,-50%')};
  width: 20px;
  color: ${({ isActive, theme }: { isActive: boolean; theme: Theme }) =>
    isActive ? theme.color.primary_normal : theme.color.gray_600};
`
